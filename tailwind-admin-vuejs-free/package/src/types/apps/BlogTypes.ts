interface blogProfile {
    id: number;
    avatar: string;
    name: string;
}

export type blogType = {
    id?: string | number;
    profile?: blogProfile;
    time?: Date;
    comment?: string;
    replies?: blogType[];
};

export type blogpostType = {
    id?: string | number;
    title?: string;
    content?: string;
    coverImg?: string;
    createdAt?: string | Date;
    view?: number;
    share?: number;
    category?: string;
    featured?: boolean;
    author?: blogProfile;
    comments?: blogType[];
};
