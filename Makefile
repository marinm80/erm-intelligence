.PHONY: setup dev

setup:
	npm install
	npm install --prefix backend
	npm install --prefix frontend
	@echo "Setup completo. Ejecuta 'make dev' para iniciar."

dev:
	npm run dev
