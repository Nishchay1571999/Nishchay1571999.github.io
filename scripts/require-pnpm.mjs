if (!process.env.npm_config_user_agent?.startsWith('pnpm/')) {
  console.error(
    'This repository uses pnpm. Run corepack enable, then pnpm install.',
  );
  process.exit(1);
}
