import { Container } from "@mui/material";
import { CgMail } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { MdOutlineLocalPhone } from "react-icons/md";

function UpperNav() {
  return (
    <nav className="bg-[#474747] text-white ">
      <Container className="py-1 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center gap-x-1">
            <MdOutlineLocalPhone />
            <p className="text-sm">(414) 857 - 0107</p>
          </div>

          <div className="ms-8 flex items-center gap-x-1">
            <CgMail />
            <p className="text-sm">yummy@bistrobliss</p>
          </div>
        </div>
        <div className="flex gap-x-1">
          <a href="#" className="text-white">
            <FaFacebook />
          </a>
          <a href="#" className="text-white">
            <FaSquareXTwitter />
          </a>
        </div>
      </Container>
    </nav>
  );
}

export default UpperNav;
