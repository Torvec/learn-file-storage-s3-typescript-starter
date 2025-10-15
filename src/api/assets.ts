import { existsSync, mkdirSync } from "fs";

import type { ApiConfig } from "../config";

export function ensureAssetsDir(cfg: ApiConfig) {
  if (!existsSync(cfg.assetsRoot)) {
    mkdirSync(cfg.assetsRoot, { recursive: true });
  }
}

export function getInMemoryURL(cfg: ApiConfig, assetPath: string) {
  return `http://localhost:${cfg.port}/api/thumbnails/${assetPath}`;
}