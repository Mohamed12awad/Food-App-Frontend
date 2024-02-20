import { Container } from "@mui/material";
import { CgMail } from "react-icons/cg";
import { FaFacebook, FaInstagram, FaSnapchat } from "react-icons/fa";
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
        <div className="flex gap-x-1 align-middle">
          <a href="#">
            <FaFacebook className="p-1 rounded-full bg-[#F9F9F7]/20 text-white" />
          </a>
          <a href="#">
            <FaSquareXTwitter className="p-1 rounded-full bg-[#F9F9F7]/30 text-white" />
          </a>
          <a href="#">
            <FaInstagram className="p-1 rounded-full bg-[#F9F9F7]/30 text-white" />
          </a>
          <a href="#">
            <FaSnapchat className="p-1 rounded-full bg-[#F9F9F7]/30 text-white" />
          </a>
        </div>
      </Container>
    </nav>
  );
}

export default UpperNav;
