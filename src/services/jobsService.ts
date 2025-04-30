export async function getAllJobs(): Promise<{ id_title: string }[]> {
    return [
        { id_title: "frontend-developer" },
        { id_title: "ui-ux-designer" },
        { id_title: "digital-marketing-specialist" },
        { id_title: "admin-marketplace" },
        { id_title: "creative-director" },
    ];
}
