export const convertTime = (time: any) => {
    return new Date(time).toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};