<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

use Doctrine\ORM\EntityManagerInterface;

use App\Entity\Category;

/**
 * @Route("/api")
 */
class ApiController extends AbstractController
{
    /**
     * @Route("/categories", name="api_get_categories")
     */
    public function getCategories()
    {
        $entityManager = $this->getDoctrine()->getManager();
        $categories = $entityManager->getRepository(Category::class)->findAll();

        return new JsonResponse(
            [
                "status" => "200",
                "data" => $categories
            ],
            200
        );
    }
}
