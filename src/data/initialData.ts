export const allDecoraciones = [
	{
		brand: 'Minimalist Home',
		colors: [{ color: '#FFFFFF', color_name: 'Blanco' }],
		created_at: new Date().toISOString(),
		description: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'Un elegante florero de cerámica ideal para cualquier espacio.',
						},
					],
				},
			],
		},
		features: ['Cerámica premium', 'Altura: 25cm', 'Diseño minimalista'],
		id: 'a1b2c3d4-5e6f-7g8h-9i0j-k1l2m3n4o5p6',
		images: ['https://ui.shadcn.com/placeholder.svg'],
		name: 'Florero Moderno',
		price: 34.99,
		slug: 'florero-moderno',
		variants: [
			{
				color: '#FFFFFF',
				color_name: 'Blanco',
				id: 'x1y2z3a4-b5c6-d7e8-f9g0-h1i2j3k4l5m6',
				price: 34.99,
				stock: 20,
			},
		],
	},
	{
		brand: 'Rustic Charm',
		colors: [{ color: '#8B4513', color_name: 'Madera' }],
		created_at: new Date().toISOString(),
		description: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'Un hermoso espejo con marco de madera rústica para un ambiente acogedor.',
						},
					],
				},
			],
		},
		features: ['Marco de madera maciza', 'Dimensiones: 60x80cm', 'Diseño rústico'],
		id: 'b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7',
		images: ['https://ui.shadcn.com/placeholder.svg'],
		name: 'Espejo Rústico',
		price: 89.99,
		slug: 'espejo-rustico',
		variants: [
			{
				color: '#8B4513',
				color_name: 'Madera',
				id: 'y1z2x3w4-v5u6-t7s8-r9q0-p1o2n3m4l5k6',
				price: 89.99,
				stock: 12,
			},
		],
	},
	{
		brand: 'Cozy Lights',
		colors: [{ color: '#FFD700', color_name: 'Dorado' }],
		created_at: new Date().toISOString(),
		description: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'Lámpara colgante de estilo moderno con acabado dorado.',
						},
					],
				},
			],
		},
		features: ['LED integrada', 'Altura ajustable', 'Acabado dorado elegante'],
		id: 'c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8',
		images: ['https://ui.shadcn.com/placeholder.svg'],
		name: 'Lámpara Colgante',
		price: 59.99,
		slug: 'lampara-colgante',
		variants: [
			{
				color: '#FFD700',
				color_name: 'Dorado',
				id: 'z1y2x3w4-v5u6-t7s8-r9q0-p1o2n3m4l5k6',
				price: 59.99,
				stock: 15,
			},
		],
	},
];
