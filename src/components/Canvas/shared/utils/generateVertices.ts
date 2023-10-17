import { Config } from "canvas/shared/types/Options.interface";
/**
 * Generate Vertices 
 * @param config
 */
export const generateVertices = (config: Config) => {
  const vertices: number[] = [];

  for (let barIndex = 0; barIndex < config.barsCount!; barIndex++) {
    const offset = 3 * barIndex * config.particlesPerBar!;

    for (let particleIndex = 0; particleIndex < config.particlesPerBar!; particleIndex++) {
      const randomX = Math.pow(Math.random(), config.randomnessPower!) * (Math.random() < 0.5 ? 1 : -1) * config.randomness!;
      const randomY = Math.pow(Math.random(), config.randomnessPower!) * (Math.random() < 0.5 ? 1 : -1) * config.randomness!;
      const randomZ = Math.pow(Math.random(), config.randomnessPower!) * (Math.random() < 0.5 ? 1 : -1) * config.randomness!;

      const vertexOffset = 3 * particleIndex;

      vertices[offset + vertexOffset + 0] = barIndex / (config.barsCount! - 1) * 2 - 1 + randomX;
      vertices[offset + vertexOffset + 1] = 0 + randomY;
      vertices[offset + vertexOffset + 2] = (particleIndex / (config.particlesPerBar! - 1) * 2 - 1 + randomZ) / config.zAspectRatio!;
    }
  }

  return new Float32Array(vertices);
};