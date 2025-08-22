import Image from "next/image";
import logo from "@/images/logo.svg";

export default function Footer(){
    return(
        <>
            <footer className="bg-white pt-16 text-gray-700">
  <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
    {/* Logo & Description */}
    <div>
      <div className="flex items-center gap-2 mb-3">
        <a
                    href=""
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                  >
                    <Image className="w-[210px]" src={logo} alt="" />
                  </a>
      </div>
      <p className="">
        ActiveCraft specializes in Web Design and Development Services, Business
        IT Support &amp; Consulting, Mobile Applications Development Services,
        iPhone Application Development, Mobile Web Application Development,
        Database Application Development, Web Application.
        <a href="#" className="text-[#FF9900]">
          view more
        </a>
      </p>
    </div>
    {/* Services */}
    <div>
      <h3 className="font-bold text-[#404A5C] mb-3 text-2xl">Our Service</h3>
      <ul className="space-y-2">
        <li>
          <a href="#" className="hover:underline text-[15px] font-semibold">
            Website Development
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline text-[15px] font-semibold">
            Web Designing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline text-[15px] font-semibold">
            Mobile App Development
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline text-[15px] font-semibold">
            Branding and Online Marketing
          </a>
        </li>
      </ul>
    </div>
    {/* Contact Info */}
    <div>
      <h3 className="font-bold text-[#404A5C] mb-3 text-2xl">Contact Us</h3>
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <svg
  className="w-6 h-6 text-gray-800"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={24}
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    d="M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1"
  />
</svg>
{" "}
          <a href="mailto:info@activecraft.com" className="hover:underline text-[15px] font-semibold">
            info@activecraft.com
          </a>
        </li>
        <li className="flex items-center gap-2">
          <svg
  className="w-6 h-6 text-gray-800 "
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={24}
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    d="M19.0225 4 14 8.98132m0 0 3.03.00002M14 8.98132V5.99998m4.2327 8.51492-1.1431-1.1439c-1.143-1.1439-1.9758-.3696-2.8382.4565-.3159.3161-.7443.4936-1.1911.4936-.4467 0-.8751-.1775-1.191-.4936L9.998 11.9549c-.65643-.6564-.92477-1.4591 0-2.38383.8488-.86837 1.6837-1.61177.4926-2.8037L9.2995 5.57544c-.90492-.90556-1.99137-.383-2.61843.23625-3.13257 3.1118-1.72021 6.77001 1.41066 9.90141s6.78747 4.5465 9.90477 1.4254c.1744-.1461.551-.565.6473-.7712.0962-.2062.1461-.4311.1461-.6587 0-.2277-.0499-.4525-.1461-.6588-.0963-.2062-.2366-.3888-.4111-.5349Z"
  />
</svg>
{" "}
          <a href="tel:+919814808323" className="hover:underline text-[15px] font-semibold">
            +91-98148-08323
          </a>
        </li>
        <li className="flex items-center gap-2">
          <svg
  className="w-6 h-6 text-gray-800"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={24}
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    d="M19.0225 4 14 8.98132m0 0 3.03.00002M14 8.98132V5.99998m4.2327 8.51492-1.1431-1.1439c-1.143-1.1439-1.9758-.3696-2.8382.4565-.3159.3161-.7443.4936-1.1911.4936-.4467 0-.8751-.1775-1.191-.4936L9.998 11.9549c-.65643-.6564-.92477-1.4591 0-2.38383.8488-.86837 1.6837-1.61177.4926-2.8037L9.2995 5.57544c-.90492-.90556-1.99137-.383-2.61843.23625-3.13257 3.1118-1.72021 6.77001 1.41066 9.90141s6.78747 4.5465 9.90477 1.4254c.1744-.1461.551-.565.6473-.7712.0962-.2062.1461-.4311.1461-.6587 0-.2277-.0499-.4525-.1461-.6588-.0963-.2062-.2366-.3888-.4111-.5349Z"
  />
</svg>
{" "}
          <a href="tel:+919855022055" className="hover:underline text-[15px] font-semibold">
            +91-98550-22055
          </a>
        </li>
      </ul>
      <div className="flex gap-3 mt-4  text-xl">
        <a
  href="#"
  className="w-10 h-10 flex items-center justify-center bg-[#FF9900] text-white rounded-full text-xl hover:bg-[#FF9900] transition"
>
  <svg
  className="w-6 h-6  "
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={24}
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path
    fillRule="evenodd"
    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
    clipRule="evenodd"
  />
</svg>

</a>

         <a
  href="#"
  className="w-10 h-10 flex items-center justify-center bg-[#FF9900] text-white rounded-full text-xl hover:bg-[#FF9900] transition"
>
 <svg
  className="w-6 h-6"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={24}
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path
    fillRule="evenodd"
    d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
    clipRule="evenodd"
  />
</svg>


</a>


         <a
  href="#"
  className="w-10 h-10 flex items-center justify-center bg-[#FF9900] text-white rounded-full text-xl hover:bg-[#FF9900] transition"
>
 <svg
  className="w-6 h-6"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={24}
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path
    fillRule="evenodd"
    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
    clipRule="evenodd"
  />
  <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
</svg>


</a>
      </div>
    </div>
    {/* Our Presence */}
    <div>
      <h3 className="font-bold text-[#404A5C] mb-3 text-2xl">Our Presence</h3>
      <ul className="space-y-2 text-[15px] font-semibold">
        <li><span className="text-[#FF9900]">🇮🇳</span> India</li>
        <li><span className="text-[#FF9900]">🇨🇦</span> Canada</li>
        <li><span className="text-[#FF9900]">🇺🇸</span> USA</li>
        <li><span className="text-[#FF9900]">🇦🇺</span> Australia</li>
        <li><span className="text-[#FF9900]">🇬🇧</span> UK</li>
        <li><span className="text-[#FF9900]">🇳🇿</span> New Zealand</li>
        <li><span className="text-[#FF9900]">🇸🇬</span> Singapore</li>
        <li><span className="text-[#FF9900]">🇧🇳</span> Brunei Darussalam</li>
      </ul>
    </div>
  </div>
  {/* Bottom bar */}
  <div className="bg-gray-800 text-center text-white py-4 mt-10 text-sm">
    © 2005 – 2025 activecraft.com
  </div>
</footer>

        </>
    )
}