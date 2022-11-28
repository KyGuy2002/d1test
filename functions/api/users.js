// Get Users
export async function onRequestGet(context) {
    const { request, next, env } = context;

    const { results } = await env.DB.prepare("SELECT * FROM Users").all();
            
    return Response.json(results);
}

// Create User
export async function onRequestPost(context) {
    const { request, next, env } = context;

    const body = await request.formData();
    const { username, email } = Object.fromEntries(body);

    await env.DB.prepare("INSERT INTO Users (Username, Email) VALUES (?1, ?2)").bind(username, email).all();
            
    return new Response('Success!');
}

// Delete User
export async function onRequestDelete(context) {
    const { request, next, env } = context;

    let id = new URL(request.url).searchParams.get("id");
           
    await env.DB.prepare("DELETE FROM Shops WHERE UserId=?1").bind(id).all();
    await env.DB.prepare("DELETE FROM Users WHERE UserId=?1").bind(id).all();
            
    return new Response('Success!')
}