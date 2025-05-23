import {
  BadgeCheck,
  Calendar,
  ChartBar,
  ChartLine,
  CirclePlus,
  ClipboardList,
  FileUp,
  Grid2X2,
  Grid3x3,
  House,
  Mail,
  MessagesSquare,
  Package,
  PackageOpen,
  Percent,
  RefreshCcw,
  ScanBarcode,
  ShoppingBasket,
  ShoppingCart,
  Tag,
} from "lucide-react";

export const AppNavigation = [
  // Main Menu
  {
    sectionTitle: "MAIN MENU",
    children: [
      {
        icon: <House />,
        name: "Dashboard",
        path: "/dashboard",
        notifications: null,
        subPaths: null,
      },
      {
        icon: <PackageOpen />,
        name: "Products",
        path: "/products",
        subPaths: [
          {
            icon: <Package />,
            name: "All Products",
            path: "/all-products",
          },
          {
            icon: <CirclePlus />,
            name: "Add New Product",
            path: "/add-new-product",
          },
          {
            icon: <Tag />,
            name: "Tags",
            path: "/tags",
          },
        ],
      },
      {
        icon: <Grid2X2 />,
        name: "Categories",
        path: "/categories",
        notifications: null,
        subPaths: null,
      },
      {
        icon: <Grid3x3 />,
        name: "Sub Category",
        path: "/sub-category",
        notifications: null,
        subPaths: null,
      },
      {
        icon: <BadgeCheck />,
        name: "Brands",
        path: "/brands",
        notifications: null,
        subPaths: null,
      },
      {
        icon: <ScanBarcode />,
        name: "Scan Barcode",
        path: "/scan-barcode",
        notifications: null,
        subPaths: null,
      },
      {
        icon: <FileUp />,
        name: "Import Products",
        path: "/import-products",
        notifications: null,
        subPaths: null,
      },
    ],
  },

  // Analytics
  {
    sectionTitle: "ANALYTICS",
    children: [
      {
        icon: <ChartLine />,
        name: "Sales",
        path: "/sales",
        notifications: 49,
        subPaths: null,
      },
      {
        icon: <ShoppingBasket />,
        name: "Point of Sales",
        path: "/point-of-sales",
        notifications: null,
        subPaths: null,
      },
      {
        icon: <ChartBar />,
        name: "Leaderboards",
        path: "/leaderboards",
        notifications: null,
        subPaths: null,
      },
      {
        icon: <ShoppingCart />,
        name: "Orders",
        path: "/orders",
        notifications: null,
        subPaths: null,
      },
      {
        icon: <RefreshCcw />,
        name: "Refund",
        path: "/refund",
        notifications: null,
        subPaths: null,
      },
      {
        icon: <Percent />,
        name: "Taxes",
        path: "/taxes",
        notifications: null,
        subPaths: null,
      },
      {
        icon: <ClipboardList />,
        name: "Stock",
        path: "/stock",
        notifications: null,
        subPaths: null,
      },
    ],
  },

  // Apps
  {
    sectionTitle: "APPS",
    children: [
      {
        icon: <MessagesSquare />,
        name: "Chat",
        path: "/chat",
        notifications: 80,
        subPaths: null,
      },
      {
        icon: <Calendar />,
        name: "Calendar",
        path: "/calendar",
        notifications: null,
        subPaths: null,
      },
      {
        icon: <Mail />,
        name: "Email",
        path: "/email",
        notifications: null,
        subPaths: null,
      },
    ],
  },
];
