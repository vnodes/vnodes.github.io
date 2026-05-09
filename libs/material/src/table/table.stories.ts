import type { Meta, StoryObj } from '@storybook/angular';
import { TableComponent } from './table';


type Product = {
  id: number;
  createdAt: Date | string;
  updatedAt: Date | string;
  name: string;
  description: string;
  upc: string;
}

const products: Product[] = [
  {
    id: 1,
    createdAt: new Date('2024-01-15T08:00:00Z'),
    updatedAt: new Date('2024-01-15T08:00:00Z'),
    name: "Quantum Flux Capacitor",
    description: "Enables time travel by displacing the temporal field. Requires 1.21 gigawatts.",
    upc: "850012345601"
  },
  {
    id: 2,
    createdAt: new Date('2024-01-20T10:30:00Z'),
    updatedAt: new Date('2024-02-05T14:20:00Z'),
    name: "Ergonomic Mechanical Keyboard",
    description: "A 75% layout keyboard with haptic feedback and RGB backlighting.",
    upc: "850012345602"
  },
  {
    id: 3,
    createdAt: new Date('2024-02-01T09:15:00Z'),
    updatedAt: new Date('2024-02-01T09:15:00Z'),
    name: "Noise-Canceling Headphones",
    description: "Industry-leading active noise cancellation with 30-hour battery life.",
    upc: "850012345603"
  },
  {
    id: 4,
    createdAt: new Date('2024-02-10T12:00:00Z'),
    updatedAt: new Date('2024-03-12T11:45:00Z'),
    name: "Smart Mesh Router",
    description: "Tri-band Wi-Fi 6 system covering up to 5,000 sq. ft. for seamless connectivity.",
    upc: "850012345604"
  },
  {
    id: 5,
    createdAt: new Date('2024-03-01T16:40:00Z'),
    updatedAt: new Date('2024-03-01T16:40:00Z'),
    name: "Organic Dark Roast Coffee",
    description: "Ethically sourced beans from Sumatra with notes of chocolate and spice.",
    upc: "850012345605"
  },
  {
    id: 6,
    createdAt: new Date('2024-03-05T07:20:00Z'),
    updatedAt: new Date('2024-04-01T10:00:00Z'),
    name: "Stainless Steel Water Bottle",
    description: "Double-walled vacuum insulation keeps drinks cold for 24 hours.",
    upc: "850012345606"
  },
  {
    id: 7,
    createdAt: new Date('2024-03-15T14:00:00Z'),
    updatedAt: new Date('2024-03-15T14:00:00Z'),
    name: "Minimalist Leather Wallet",
    description: "Full-grain leather with RFID blocking technology and slim profile.",
    upc: "850012345607"
  },
  {
    id: 8,
    createdAt: new Date('2024-03-20T11:10:00Z'),
    updatedAt: new Date('2024-03-25T09:30:00Z'),
    name: "Ultra-Wide 4K Monitor",
    description: "34-inch curved display with 144Hz refresh rate for immersive gaming.",
    upc: "850012345608"
  },
  {
    id: 9,
    createdAt: new Date('2024-04-02T13:45:00Z'),
    updatedAt: new Date('2024-04-02T13:45:00Z'),
    name: "Smart Home Security Camera",
    description: "1080p HD video with night vision and two-way audio communication.",
    upc: "850012345609"
  },
  {
    id: 10,
    createdAt: new Date('2024-04-10T15:00:00Z'),
    updatedAt: new Date('2024-04-10T15:30:00Z'),
    name: "Portable Power Bank",
    description: "20,000mAh capacity with fast charging and multiple USB ports.",
    upc: "850012345610"
  }
];


const meta: Meta<TableComponent<Product>> = {
  component: TableComponent,
  title: 'Table/BasicTable',
};

export default meta;

type Story = StoryObj<TableComponent<Product>>;

export const Primary: Story = {
  args: {
    data: products
  },
};

