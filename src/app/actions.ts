'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

export async function revalidateTagAction(tag: string) {
    revalidateTag(tag);
}

export async function revalidateMainPage() {
    console.log(12313);

    revalidatePath('/');
}
