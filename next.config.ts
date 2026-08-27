import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Don't let `next dev` append its agent-rules block to the starter's CLAUDE.md
  agentRules: false,
};

export default nextConfig;
