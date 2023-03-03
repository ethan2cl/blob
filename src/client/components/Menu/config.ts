import { MenuProps } from "antd";

const menuItems: MenuProps["items"] = [
  {
    key: "home",
    label: "Home",
  },
  {
    key: "test",
    label: "Test",
    children: [
      {
        key: "test1",
        label: "TEST1",
      },
      {
        key: "test2",
        label: "TEST2",
      },
    ],
  },
];

export default menuItems;
