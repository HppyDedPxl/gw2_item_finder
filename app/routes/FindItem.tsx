import {getDb} from "../Gw2ItemDb.server"

// export const loader = async () => {
//     const db = await getDb()
//     const url = new URL(request.url);
//     const res = await db.all('SELECT * from items WHERE name=='+URL)
// }


function mysql_real_escape_string (str) {
  return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
      switch (char) {
          case "\0":
              return "\\0";
          case "\x08":
              return "\\b";
          case "\x09":
              return "\\t";
          case "\x1a":
              return "\\z";
          case "\n":
              return "\\n";
          case "\r":
              return "\\r";
          case "\"":
          case "'":
          case "\\":
          case "%":
              return "\\"+char; // prepends a backslash to backslash, percent,
                                // and double/single quotes
          default:
              return char;
      }
  });
}

// if the user visits /invoices/123
export async function loader({
    request,
  }: LoaderFunctionArgs) {

    const url = new URL(request.url)
    const db = await getDb()
    let search_input = url.searchParams.get('q');
    search_input = mysql_real_escape_string(search_input)
    const query = 'SELECT * FROM items WHERE name LIKE "%'+search_input +'%"'
    const res = await db.all(query)
    return res
  }