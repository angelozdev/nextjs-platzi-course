import { GetStaticPaths, GetStaticProps } from "next";
import { Product as IProduct } from "types/product";
import axios, { AxiosError } from "axios";

// views
import SingleProduct from "views/SingleProduct";

function ProductPage({ name, image, attributes, id, price, sku }: IProduct) {
  return (
    <SingleProduct
      name={name}
      attributes={attributes}
      image={image}
      id={id}
      price={price}
      sku={sku}
    />
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return axios
    .get<{ data: IProduct[] }>("http://localhost:3000/api/products")
    .then(({ data: { data } }) => {
      const paths = data.map(({ id }) => ({ params: { id } }));
      return {
        paths,
        fallback: false,
      };
    });
};

export const getStaticProps: GetStaticProps<IProduct> = ({ params = {} }) => {
  const { id } = params;

  if (!id || typeof id !== "string") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return axios
    .get<{ data: IProduct }>(`http://localhost:3000/api/products/${id}`)
    .then(({ data: { data: product } }) => {
      return {
        props: product,
      };
    })
    .catch((error: AxiosError) => {
      console.error(error.response?.data || error.message);
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    });
};

export default ProductPage;
