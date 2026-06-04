import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/admin/config.yml",
        headers: [{ key: "Content-Type", value: "text/yaml; charset=utf-8" }],
      },
    ];
  },
};

export default nextConfig;
