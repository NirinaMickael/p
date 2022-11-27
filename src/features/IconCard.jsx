import React from "react";
import { GitHub, Facebook, LinkedIn, Instagram } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Item, Rounded } from "../@core/data/variant";
const icons = [
  {
    id: 1,
    src: <GitHub sx={{ fontSize: 40, fill: "#2a2438" }} />,
    url: "",
  },
  {
    id: 2,
    src: <Facebook sx={{ fontSize: 40, fill: "#2a2438" }} />,
    url: "",
  },
  {
    id: 3,
    src: <LinkedIn sx={{ fontSize: 40, fill: "#2a2438" }} />,
    url: "",
  },
  {
    id: 4,
    src: <Instagram sx={{ fontSize: 40, fill: "#2a2438" }} />,
    url: "",
  },
];
export default function IconCard() {
  return (
    <motion.div
      className="icons"
      variants={Rounded}
      initial="hidden"
      animate="visible"
    >
      {icons.map((e) => {
        return (
          <motion.a
            href={e.url}
            variants={Item}
            whileHover={{ scale: 1.5 }}
            key={e.id}
          >
           {e.src}
          </motion.a>
        );
      })}
    </motion.div>
  );
}
