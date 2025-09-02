import Image from "next/image";
import { MessageCircleHeart, HeartPlus } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#252b42] text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Image
            src="/logo.png"
            alt="Logo"
            height={50}
            width={50}
          />

          <div className="flex items-center space-x-6 text-sm text-gray-300">
            <a
              href="https://www.instagram.com/invitarteok/#"
              className="flex items-center space-x-2 hover:text-[#9ad2e1] transition-colors"
              aria-label="Instagram"
            >
              <MessageCircleHeart className="w-5 h-5" />
              <span>@invitarteok</span>
            </a>

            <a
              href="https://wa.me/+5493447542735"
              className="flex items-center space-x-2 hover:text-[#9ad2e1] transition-colors"
              aria-label="WhatsApp"
            >
              <HeartPlus className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}