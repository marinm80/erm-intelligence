import { Risk } from '../models/risk.model.ts';
import { IBaseRepository } from './base.repository.ts';
import pool from '../config/database.ts';

export class RiskRepository implements IBaseRepository<Risk> {
  async findAll(): Promise<Risk[]> {
    const res = await pool.query('SELECT * FROM risks ORDER BY created_at DESC');
    return res.rows.map(this.mapToModel);
  }

  async findById(id: string): Promise<Risk | null> {
    const res = await pool.query('SELECT * FROM risks WHERE id = $1', [id]);
    if (res.rows.length === 0) return null;
    return this.mapToModel(res.rows[0]);
  }

  async create(risk: Risk): Promise<Risk> {
    const query = `
      INSERT INTO risks (title, description, level, status, category, probability, impact)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `;
    const values = [
      risk.title,
      risk.description,
      risk.level,
      risk.status,
      risk.category,
      risk.probability,
      risk.impact,
    ];
    const res = await pool.query(query, values);
    return this.mapToModel(res.rows[0]);
  }

  async update(id: string, risk: Partial<Risk>): Promise<Risk | null> {
    const res = await pool.query('SELECT * FROM risks WHERE id = $1', [id]);
    if (res.rows.length === 0) return null;

    const current = res.rows[0];
    const updated = { ...current, ...risk };

    const query = `
      UPDATE risks 
      SET title = $1, description = $2, level = $3, status = $4, category = $5, probability = $6, impact = $7, updated_at = NOW()
      WHERE id = $8
      RETURNING *
    `;
    const values = [
      updated.title,
      updated.description,
      updated.level,
      updated.status,
      updated.category,
      updated.probability,
      updated.impact,
      id,
    ];
    const updateRes = await pool.query(query, values);
    return this.mapToModel(updateRes.rows[0]);
  }

  async delete(id: string): Promise<boolean> {
    const res = await pool.query('DELETE FROM risks WHERE id = $1', [id]);
    return (res.rowCount ?? 0) > 0;
  }

  private mapToModel(row: any): Risk {
    return {
      id: row.id,
      title: row.title,
      description: row.description,
      level: row.level,
      status: row.status,
      category: row.category,
      probability: row.probability,
      impact: row.impact,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };
  }
}
