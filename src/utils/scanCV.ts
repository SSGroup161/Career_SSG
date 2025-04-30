export const scanCV = async (file: File) => {
    const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf");
    pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

    let text = "";
    for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        text += content.items.map((item: any) => item.str).join("\n") + "\n";
    }

    const lines = text
        .split(/\n+/)
        .map((line) => line.trim())
        .filter(Boolean);

    // Extract name
    let name = "";
    for (let i = 0; i < lines.length; i++) {
        const clean = lines[i];
        if (
            clean &&
            !clean.match(/(@|\+62|08|\||\d{3,})/) &&
            !clean.match(
                /developer|engineer|manager|designer|intern|freelance/i
            )
        ) {
            name = clean;
            break;
        }
    }

    const fullText = lines.join(" ").replace(/\s+/g, " ").trim();

    const emailMatch = fullText.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i);
    const phoneMatch = fullText.match(
        /(?:\+62|62|08)[-\s]?[0-9]{3,4}[-\s]?[0-9]{3,4}[-\s]?[0-9]{0,4}/
    );
    const domicileMatch = fullText.match(
        /(?:Domicile|Address|Location)[:\-\s]*([A-Za-z\s,]+)/i
    );

    let domicile = "";
    const locationLine = lines.find(
        (line) =>
            /jakarta|indonesia|bandung|surabaya|bogor/i.test(line) &&
            line.includes("|")
    );
    if (locationLine) {
        const loc = locationLine.split("|")[0].trim();
        domicile = loc;
    }

    const result: Partial<{
        name: string;
        email: string;
        phone: string;
        domicile: string;
    }> = {};

    if (name) result.name = name;
    if (emailMatch?.[0]) result.email = emailMatch[0].trim();
    if (phoneMatch?.[0]) result.phone = phoneMatch[0].trim();
    if (domicileMatch?.[1]) result.domicile = domicileMatch[1].trim();
    else if (domicile) result.domicile = domicile;

    return result;
};
