export const IsNode = (e: EventTarget | null): e is Node =>
    e && 'nodeType' in e ? true : false;
