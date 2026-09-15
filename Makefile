.PHONY: setup verify

setup:
	@echo "Initializing development environment..."
	@for tool in node npm git; do \
		if command -v $$tool &> /dev/null; then \
			echo "✓ $$tool is available"; \
		else \
			echo "⚠ $$tool not found"; \
		fi; \
	done
	@echo "Loading runtime diagnostics module..."
	@node runtime.js
	@echo "Setup complete."

verify:
	@node --version 2>/dev/null || echo "Node.js not found"
	@npm --version 2>/dev/null || echo "npm not found"
	@echo "Verification complete."
