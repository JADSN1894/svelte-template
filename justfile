# Clean
clean:
    @rm -rf .dfx node_modules package-lock.json 
    @npm cache clean target --force

# Reset project to t0
reset-setup: clean
   @bun install

# Development
debug:
    bun run dev

# Production
release:
    bun run deploy