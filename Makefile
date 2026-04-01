.PHONY: setup dev stop reset

setup:
	npm install
	npm install --prefix backend
	npm install --prefix frontend
	npm run db:up
	@echo "Setup completo. Ejecuta 'make dev' para iniciar."

dev:
	npm run db:up
	npm run dev

stop:
	npm run db:down

reset:
	npm run db:reset
