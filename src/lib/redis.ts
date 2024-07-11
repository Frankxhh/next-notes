// @ts-nocheck
import Redis from 'ioredis'

const redis = new Redis()

export interface Note {
    title: string;
    content?: string;
    updateTime?: string;
}

type NoteData = Record<string, string>;

const initialData: NoteData = {
    "1702459181837": '{"title":"sunt aut","content":"quia et suscipit suscipit recusandae","updateTime":"2023-12-13T09:19:48.837Z"}',
    "1702459182837": '{"title":"qui est","content":"est rerum tempore vitae sequi sint","updateTime":"2023-12-13T09:19:48.837Z"}',
    "1702459188837": '{"title":"ea molestias","content":"et iusto sed quo iure","updateTime":"2023-12-13T09:19:48.837Z"}'
}

export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export async function getAllNotes(): Promise<NoteData> {
    try {
        // await sleep(3000); // 模拟延迟
        const data = await redis.hgetall("notes");
        if (Object.keys(data).length == 0) {
            await redis.hset("notes", initialData);
        }
        return redis.hgetall("notes");
    } catch (e) {
        return {}
    }
}

export async function addNote(data: any) {
    const uuid = Date.now().toString();
    await redis.hset("notes", [uuid], data);
    return uuid
}

export async function updateNote(uuid: string, data: any) {
    await redis.hset("notes", [uuid], data);
}

export async function getNote(uuid: string): Promise<Note> {
    // await sleep(3000); // 模拟延迟
    return JSON.parse(await redis.hget("notes", uuid));
}

export async function delNote(uuid: string) {
    return redis.hdel("notes", uuid)
}

export default redis
