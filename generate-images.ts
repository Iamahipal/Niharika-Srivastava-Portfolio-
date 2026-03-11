import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateAndSave(prompt: string, filename: string) {
    console.log(`Generating image for: ${filename}...`);
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3.1-flash-image-preview',
            contents: prompt,
            config: {
                imageConfig: {
                    aspectRatio: "4:3",
                    imageSize: "1K"
                }
            }
        });
        
        for (const part of response.candidates?.[0]?.content?.parts || []) {
            if (part.inlineData) {
                const base64Data = part.inlineData.data;
                fs.writeFileSync(path.join(process.cwd(), 'public', filename), base64Data, 'base64');
                console.log(`Saved ${filename}`);
                return;
            }
        }
        console.log(`No image data found for ${filename}`);
    } catch (e) {
        console.error(`Failed to generate ${filename}:`, e);
    }
}

async function main() {
    if (!fs.existsSync('public')) fs.mkdirSync('public');
    await generateAndSave("A clean, modern, high-tech web application dashboard UI for managing and purchasing fresh vegetables. UI/UX design, vibrant greens, fresh produce, sleek interface, modern web design, high quality, dribbble style.", "veggiesmart.jpg");
    await generateAndSave("A dark-mode, sleek daily management dashboard UI. Productivity app, task lists, calendar, analytics charts, modern web app design, glowing accents, high quality, dribbble style.", "dayos.jpg");
    await generateAndSave("A modern social media analytics dashboard UI. Data visualization, charts, graphs, engagement metrics, vibrant colors, clean interface, professional web app, high quality, dribbble style.", "socialmeter.jpg");
}

main();
