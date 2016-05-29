install:
	@npm --registry=http://registry.npm.taobao.org install

# If the first argument is "run"...
ifeq (run,$(firstword $(MAKECMDGOALS)))
  # use the rest as arguments for "run"
  f := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  # ...and turn them into do-nothing targets
  $(eval $(f):;@:)
endif

run: install
	@if [ ! -f "src/$(f).js" ]; then \
		echo "file not found"; \
	else \
		file="$(f)" node index.js; \
	fi
