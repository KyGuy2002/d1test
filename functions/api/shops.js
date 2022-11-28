// Get Shops
export async function onRequestGet(context) {
    const { request, next, env } = context;

    const { results } = await env.DB.prepare(
        "SELECT Shops.ShopId, Shops.ShopName, Users.Username, Users.UserId FROM Shops INNER JOIN Users ON Shops.UserId = Users.UserId"
        ).all();
            
    return Response.json(results);
}

// Create Shop
export async function onRequestPost(context) {
    const { request, next, env } = context;

    const body = await request.formData();
    const { shopName, shopOwner } = Object.fromEntries(body);

    await env.DB.prepare("INSERT INTO Shops (ShopName, UserId) VALUES (?1, ?2)").bind(shopName, shopOwner).all();
            
    return new Response('Success!');
}

// Delete User
export async function onRequestDelete(context) {
    const { request, next, env } = context;

    let id = new URL(request.url).searchParams.get("id");
           
    await env.DB.prepare("DELETE FROM Shops WHERE ShopId=?1").bind(id).all();
            
    return new Response('Success!')
}