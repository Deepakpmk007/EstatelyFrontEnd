export async function blurData(src: string): Promise<string> {
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });
  return buffer.toString("base64");
}
