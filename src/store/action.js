export const SWITCHTAB = 'SWITCHTAB';

export function addNote(index, title) {
    return { type: SWITCHTAB, index: index, title: title };
}
