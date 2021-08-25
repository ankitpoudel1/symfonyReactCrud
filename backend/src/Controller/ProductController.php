<?php

namespace App\Controller;

use App\Entity\Product;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    // /**
    //  * @Route("/product", name="product")
    //  */
    // public function index(): Response
    // {

    //     return $this->json([
    //         'message' => 'Welcome to your new controller!',
    //         'path' => 'src/Controller/ProductController.php',
    //     ]);
    // }

    /**
     * @Route("/product", name="create_product",methods={"POST"})
     */
    public function createProduct(Request $request): Response
    {
        try {
            $parameters = json_decode($request->getContent(), true);
            $entityManager = $this->getDoctrine()->getManager();
            $product = new Product();
            $product->setName($parameters['name']);
            $product->setPrice($parameters['price']);
            $product->setProductCode($parameters['productCode']);
            $entityManager->persist($product);
            $entityManager->flush();
            return $this->json([
                'status' => true,
                'message' => 'Product Added'
            ]);
        }
        catch (\Exception $e){
            return $this->json([
                'status' => false,
                'message' => $e->getMessage()
            ]);

        }
    }

    /**
     * @Route("/product/{id}", name="product_show")
     */
    public function show(int $id): Response
    {
        $product = $this->getDoctrine()
            ->getRepository(Product::class)
            ->find($id);

        if (!$product) {
            throw $this->createNotFoundException(
                'No product found for id '.$id
            );
        }

        return $this->json([
            'productName' => $product->getName(),
        ]);
        // or render a template
        // in the template, print things with {{ product.name }}
        // return $this->render('product/show.html.twig', ['product' => $product]);
    }

    /**
     * @Route("/products/list", name="product_list")
     */
    public function listProducts(ProductRepository $productRepository): Response
    {
        $products = $productRepository->getProductList();

        if (!$products) {
            throw $this->createNotFoundException(
                'No products found'
            );
        }

        return $this->json($products);
        // or render a template
        // in the template, print things with {{ product.name }}
        // return $this->render('product/show.html.twig', ['product' => $product]);
    }
}
