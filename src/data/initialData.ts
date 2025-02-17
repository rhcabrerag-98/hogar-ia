export const allProductos = [
  {
    brand: "Ikea",
    colors: [{ color: "#000000", color_name: "Negro" }],
    created_at: new Date().toISOString(),
    description: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Lámpara de pie moderna con luz LED regulable.",
            },
          ],
        },
      ],
    },
    features: ["Regulable", "LED de bajo consumo", "Base de metal negro"],
    id: "4f53b2ea-2a40-4ec7-a6d0-b7c95888ff",
    images: ["https://ui.shadcn.com/placeholder.svg"],
    name: "Lámpara de pie LED",
    price: 89.99,
    slug: "lampara-pie-led",
    variants: [
      {
        color: "#000000",
        color_name: "Negro",
        id: "a4e814b7-fe26-4e08-8a6f-13a39da43e52",
        price: 89.99,
        stock: 10,
				storage: '256GB',
      },
    ],
  },
  {
    brand: "Casaideas",
    colors: [{ color: "#FFFFFF", color_name: "Blanco" }],
    created_at: new Date().toISOString(),
    description: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Set de sábanas de algodón 100% con diseño minimalista.",
            },
          ],
        },
      ],
    },
    features: ["Algodón 100%", "Tacto suave", "Fácil de lavar"],
    id: "1b3c2de7-3a10-4e9b-b8e7-b5c8a1234167",
    images: ["https://ui.shadcn.com/placeholder.svg"],
    name: "Set de sábanas algodón",
    price: 59.99,
    slug: "set-sabanas-algodon",
    variants: [
      {
        color: "#FFFFFF",
        color_name: "Blanco",
        id: "a3f1a5b7-fe26-4e08-8b7e-16a45cd43f11",
        price: 59.99,
        stock: 5,
				storage: '256GB',
      },
    ],
  },
  {
    brand: "Zara Home",
    colors: [{ color: "#FF0000", color_name: "Rojo" }],
    created_at: new Date().toISOString(),
    description: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Almohadón decorativo con textura aterciopelada.",
            },
          ],
        },
      ],
    },
    features: [
      "Tela aterciopelada",
      "Relleno de alta calidad",
      "Tamaño: 45x45 cm",
    ],
    id: "e5a1d2be-5b60-4f3e-b8d1-a3c98c123abe",
    images: ["https://ui.shadcn.com/placeholder.svg"],
    name: "Almohadón decorativo",
    price: 29.99,
    slug: "almohadon-decorativo",
    variants: [
      {
        color: "#FF0000",
        color_name: "Rojo",
        id: "b2c3d4f5-fe26-4e08-8e0f-17a58bd43c12",
        price: 29.99,
        stock: 15,
				storage: '256GB',
      },
    ],
  },
  {
    brand: "Saga Falabella",
    colors: [{ color: "#0000FF", color_name: "Azul" }],
    created_at: new Date().toISOString(),
    description: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Juego de vajilla de cerámica para 4 personas.",
            },
          ],
        },
      ],
    },
    features: [
      "Cerámica resistente",
      "Incluye platos y tazas",
      "Diseño elegante",
    ],
    id: "f8c3b4a9-4d3a-4f6b-a8d1-b3c78c12wcde",
    images: ["https://ui.shadcn.com/placeholder.svg"],
    name: "Juego de vajilla",
    price: 99.99,
    slug: "juego-vajilla",
    variants: [
      {
        color: "#0000FF",
        color_name: "Azul",
        id: "c1d2e3f4-fe26-4e08-8f1e-18a69bd45d13",
        price: 99.99,
        stock: 8,
				storage: '256GB',
      },
    ],
  },
  {
    brand: "Ikea",
    colors: [{ color: "#800080", color_name: "Púrpura" }],
    created_at: new Date().toISOString(),
    description: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Elegante lámpara de diseño moderno.",
            },
          ],
        },
      ],
    },
    features: ["Regulable", "LED de bajo consumo", "Base de acero"],
    id: "f8c3b4a9-4d3a-4f6b-a8d1-b3c78c12fcde",
    images: ["https://ui.shadcn.com/placeholder.svg"],
    name: "Lámpara de Mesa Moderna",
    price: 79.99,
    slug: "lampara-mesa-moderna",
    variants: [
      {
        color: "#800080",
        color_name: "Púrpura",
        id: "i1j2k3l4-fe26-4e08-9g5f-27a50gj13m22",
        price: 79.99,
        stock: 8,
        storage: "256GB",
      },
    ],
  },
  {
    brand: "Casaideas",
    colors: [{ color: "#FFFFFF", color_name: "Blanco" }],
    created_at: new Date().toISOString(),
    description: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Juego de sábanas 100% algodón.",
            },
          ],
        },
      ],
    },
    features: ["Suave al tacto", "Diseño elegante", "Lavable a máquina"],
    id: "1b3c2de7-3a10-4e9b-b8e7-b5c8a1234567",
    images: ["https://ui.shadcn.com/placeholder.svg"],
    name: "Juego de Sábanas Queen",
    price: 99.99,
    slug: "juego-sabanas-queen",
    variants: [
      {
        color: "#FFFFFF",
        color_name: "Blanco",
        id: "a3f1a5b7-fe26-4e08-8b7e-16a45cd43f11",
        price: 99.99,
        stock: 5,
        storage: "256GB",
      },
    ],
  },
  {
    brand: "Zara Home",
    colors: [{ color: "#FF0000", color_name: "Rojo" }],
    created_at: new Date().toISOString(),
    description: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Alfombra de diseño sofisticado.",
            },
          ],
        },
      ],
    },
    features: ["100% lana", "Hecha a mano", "Antideslizante"],
    id: "f1e2d3b4-7a5c-4f5b-b9e1-a3d18c321bcd",
    images: ["https://ui.shadcn.com/placeholder.svg"],
    name: "Alfombra de Lana",
    price: 299.99,
    slug: "alfombra-lana",
    variants: [
      {
        color: "#FF0000",
        color_name: "Rojo",
        id: "l2m3n4o5-fe26-4e08-9a2b-28a61dh14k23",
        price: 299.99,
        stock: 12,
        storage: "256GB",
      },
    ],
  },
  {
    brand: "Ripley Home",
    colors: [{ color: "#00FF00", color_name: "Verde" }],
    created_at: new Date().toISOString(),
    description: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Set de cojines decorativos.",
            },
          ],
        },
      ],
    },
    features: ["Relleno hipoalergénico", "Diseño moderno", "Funda removible"],
    id: "e5a1d2be-5b60-4f3e-b8d1-a3c98c123abf",
    images: ["https://ui.shadcn.com/placeholder.svg"],
    name: "Set de Cojines",
    price: 59.99,
    slug: "set-cojines",
    variants: [
      {
        color: "#00FF00",
        color_name: "Verde",
        id: "k4l5m6n7-fe26-4e08-9c2d-29a72ef15l24",
        price: 59.99,
        stock: 15,
        storage: "256GB",
      },
    ],
  },
];

export const recentProductos = [
  {
    brand: "Ikea",
    colors: [{ color: "#000000", color_name: "Negro" }],
    created_at: new Date().toISOString(),
    description: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Lámpara de pie moderna con luz LED regulable.",
            },
          ],
        },
      ],
    },
    features: ["Regulable", "LED de bajo consumo", "Base de metal negro"],
    id: "4f53b2ea-2a40-4ec7-a6d0-b7c95888ff",
    images: ["https://ui.shadcn.com/placeholder.svg"],
    name: "Lámpara de pie LED",
    price: 89.99,
    slug: "lampara-pie-led",
    variants: [
      {
        color: "#000000",
        color_name: "Negro",
        id: "a4e814b7-fe26-4e08-8a6f-13a39da43e52",
        price: 89.99,
        stock: 10,
        storage: "128GB",
      },
    ],
  },
  {
    brand: "Casaideas",
    colors: [{ color: "#FFFFFF", color_name: "Blanco" }],
    created_at: new Date().toISOString(),
    description: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Set de sábanas de algodón 100% con diseño minimalista.",
            },
          ],
        },
      ],
    },
    features: ["Algodón 100%", "Tacto suave", "Fácil de lavar"],
    id: "1b3c2de7-3a10-4e9b-b8e7-b5c8a1234167",
    images: ["https://ui.shadcn.com/placeholder.svg"],
    name: "Set de sábanas algodón",
    price: 59.99,
    slug: "set-sabanas-algodon",
    variants: [
      {
        color: "#FFFFFF",
        color_name: "Blanco",
        id: "a3f1a5b7-fe26-4e08-8b7e-16a45cd43f11",
        price: 59.99,
        stock: 5,
        storage: "128GB",
      },
    ],
  },
  {
    brand: "Zara Home",
    colors: [{ color: "#FF0000", color_name: "Rojo" }],
    created_at: new Date().toISOString(),
    description: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Almohadón decorativo con textura aterciopelada.",
            },
          ],
        },
      ],
    },
    features: [
      "Tela aterciopelada",
      "Relleno de alta calidad",
      "Tamaño: 45x45 cm",
    ],
    id: "e5a1d2be-5b60-4f3e-b8d1-a3c98c123abe",
    images: ["https://ui.shadcn.com/placeholder.svg"],
    name: "Almohadón decorativo",
    price: 29.99,
    slug: "almohadon-decorativo",
    variants: [
      {
        color: "#FF0000",
        color_name: "Rojo",
        id: "b2c3d4f5-fe26-4e08-8e0f-17a58bd43c12",
        price: 29.99,
        stock: 15,
        storage: "128GB",
      },
    ],
  },
  {
    brand: "Saga Falabella",
    colors: [{ color: "#0000FF", color_name: "Azul" }],
    created_at: new Date().toISOString(),
    description: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Juego de vajilla de cerámica para 4 personas.",
            },
          ],
        },
      ],
    },
    features: [
      "Cerámica resistente",
      "Incluye platos y tazas",
      "Diseño elegante",
    ],
    id: "f8c3b4a9-4d3a-4f6b-a8d1-b3c78c12wcde",
    images: ["https://ui.shadcn.com/placeholder.svg"],
    name: "Juego de vajilla",
    price: 99.99,
    slug: "juego-vajilla",
    variants: [
      {
        color: "#0000FF",
        color_name: "Azul",
        id: "c1d2e3f4-fe26-4e08-8f1e-18a69bd45d13",
        price: 99.99,
        stock: 8,
        storage: "128GB",
      },
    ],
  },
];

export const popularProductos = [
  {
    brand: "Ikea",
    colors: [{ color: "#800080", color_name: "Púrpura" }],
    created_at: new Date().toISOString(),
    description: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Elegante lámpara de diseño moderno.",
            },
          ],
        },
      ],
    },
    features: ["Regulable", "LED de bajo consumo", "Base de acero"],
    id: "f8c3b4a9-4d3a-4f6b-a8d1-b3c78c12fcde",
    images: ["https://ui.shadcn.com/placeholder.svg"],
    name: "Lámpara de Mesa Moderna",
    price: 79.99,
    slug: "lampara-mesa-moderna",
    variants: [
      {
        color: "#800080",
        color_name: "Púrpura",
        id: "i1j2k3l4-fe26-4e08-9g5f-27a50gj13m22",
        price: 79.99,
        stock: 8,
        storage: "256GB",
      },
    ],
  },
  {
    brand: "Casaideas",
    colors: [{ color: "#FFFFFF", color_name: "Blanco" }],
    created_at: new Date().toISOString(),
    description: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Juego de sábanas 100% algodón.",
            },
          ],
        },
      ],
    },
    features: ["Suave al tacto", "Diseño elegante", "Lavable a máquina"],
    id: "1b3c2de7-3a10-4e9b-b8e7-b5c8a1234567",
    images: ["https://ui.shadcn.com/placeholder.svg"],
    name: "Juego de Sábanas Queen",
    price: 99.99,
    slug: "juego-sabanas-queen",
    variants: [
      {
        color: "#FFFFFF",
        color_name: "Blanco",
        id: "a3f1a5b7-fe26-4e08-8b7e-16a45cd43f11",
        price: 99.99,
        stock: 5,
        storage: "256GB",
      },
    ],
  },
  {
    brand: "Zara Home",
    colors: [{ color: "#FF0000", color_name: "Rojo" }],
    created_at: new Date().toISOString(),
    description: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Alfombra de diseño sofisticado.",
            },
          ],
        },
      ],
    },
    features: ["100% lana", "Hecha a mano", "Antideslizante"],
    id: "f1e2d3b4-7a5c-4f5b-b9e1-a3d18c321bcd",
    images: ["https://ui.shadcn.com/placeholder.svg"],
    name: "Alfombra de Lana",
    price: 299.99,
    slug: "alfombra-lana",
    variants: [
      {
        color: "#FF0000",
        color_name: "Rojo",
        id: "l2m3n4o5-fe26-4e08-9a2b-28a61dh14k23",
        price: 299.99,
        stock: 12,
        storage: "256GB",
      },
    ],
  },
  {
    brand: "Ripley Home",
    colors: [{ color: "#00FF00", color_name: "Verde" }],
    created_at: new Date().toISOString(),
    description: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Set de cojines decorativos.",
            },
          ],
        },
      ],
    },
    features: ["Relleno hipoalergénico", "Diseño moderno", "Funda removible"],
    id: "e5a1d2be-5b60-4f3e-b8d1-a3c98c123abf",
    images: ["https://ui.shadcn.com/placeholder.svg"],
    name: "Set de Cojines",
    price: 59.99,
    slug: "set-cojines",
    variants: [
      {
        color: "#00FF00",
        color_name: "Verde",
        id: "k4l5m6n7-fe26-4e08-9c2d-29a72ef15l24",
        price: 59.99,
        stock: 15,
        storage: "256GB",
      },
    ],
  },
];
