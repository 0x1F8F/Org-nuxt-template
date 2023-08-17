
export default eventHandler(async (event) => {
    
    const { body } = await readBody(event);
    console.log( `login : ${body}` );
})