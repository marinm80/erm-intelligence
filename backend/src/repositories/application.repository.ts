import { Application } from '../models/application.model.ts';
import { IBaseRepository } from './base.repository.ts';
import pool from '../config/database.ts';

export class ApplicationRepository implements IBaseRepository<Application> {
  async findAll(): Promise<Application[]> {
    const res = await pool.query('SELECT * FROM applications ORDER BY created_at DESC');
    return res.rows.map(this.mapToModel);
  }

  async findById(id: string): Promise<Application | null> {
    const res = await pool.query('SELECT * FROM applications WHERE id = $1', [id]);
    if (res.rows.length === 0) return null;
    return this.mapToModel(res.rows[0]);
  }

  async create(application: Application): Promise<Application> {
    const query = `
      INSERT INTO applications (position_id, full_name, email, linkedin_url, motivation_letter, cv_path, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `;
    const values = [
      application.positionId,
      application.fullName,
      application.email,
      application.linkedinUrl || null,
      application.motivationLetter,
      application.cvPath,
      application.status || 'pending'
    ];
    const res = await pool.query(query, values);
    return this.mapToModel(res.rows[0]);
  }

  async update(id: string, application: Partial<Application>): Promise<Application | null> {
    const res = await pool.query('SELECT * FROM applications WHERE id = $1', [id]);
    if (res.rows.length === 0) return null;

    const current = res.rows[0];
    const updated = { ...current, ...application };

    const query = `
      UPDATE applications 
      SET position_id = $1, full_name = $2, email = $3, linkedin_url = $4, motivation_letter = $5, cv_path = $6, status = $7
      WHERE id = $8
      RETURNING *
    `;
    const values = [
      updated.position_id,
      updated.full_name,
      updated.email,
      updated.linkedin_url,
      updated.motivation_letter,
      updated.cv_path,
      updated.status,
      id,
    ];
    const updateRes = await pool.query(query, values);
    return this.mapToModel(updateRes.rows[0]);
  }

  async delete(id: string): Promise<boolean> {
    const res = await pool.query('DELETE FROM applications WHERE id = $1', [id]);
    return (res.rowCount ?? 0) > 0;
  }

  private mapToModel(row: any): Application {
    return {
      id: row.id,
      positionId: row.position_id,
      fullName: row.full_name,
      email: row.email,
      linkedinUrl: row.linkedin_url,
      motivationLetter: row.motivation_letter,
      cvPath: row.cv_path,
      status: row.status,
      createdAt: row.created_at,
    };
  }
}
