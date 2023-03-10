import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "91abo3yo",
  dataset: "production",
  apiVersion: "2022-01-21",
  useCdn: false
});


export async function load({ }) {
  const data = await client.fetch(`*[_type == "post"]`);

	console.log(data[0])

  if (data) {
    return {
      post: data
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error")
  };
}