(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{4154:(e,s,l)=>{Promise.resolve().then(l.bind(l,6490))},6490:(e,s,l)=>{"use strict";l.r(s),l.d(s,{default:()=>w});var r=l(5155),t=l(1264),i=l(2894),a=l(9099),n=l(6766),d=l(2115),o=l(4624),c=l(2085),h=l(2596),x=l(9688);function m(){for(var e=arguments.length,s=Array(e),l=0;l<e;l++)s[l]=arguments[l];return(0,x.QP)((0,h.$)(s))}let u=(0,c.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function j(e){let{className:s,variant:l,size:t,asChild:i=!1,...a}=e,n=i?o.DX:"button";return(0,r.jsx)(n,{"data-slot":"button",className:m(u({variant:l,size:t,className:s})),...a})}function f(e){let{className:s,...l}=e;return(0,r.jsx)("div",{"data-slot":"card",className:m("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",s),...l})}function g(e){let{className:s,...l}=e;return(0,r.jsx)("div",{"data-slot":"card-content",className:m("px-6",s),...l})}function w(){let e=(0,d.useRef)(null),s=(0,d.useRef)(null),l=(0,d.useRef)(null),o=(0,d.useRef)(null),[c,h]=(0,d.useState)("about"),x=(e,s)=>{e.current&&(e.current.scrollIntoView({behavior:"smooth"}),h(s))};return(0,d.useEffect)(()=>{let r=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&h(e.target.id)})},{threshold:.5}),t=[{ref:e.current,id:"about"},{ref:s.current,id:"experience"},{ref:l.current,id:"projects"},{ref:o.current,id:"skills"}];return t.forEach(e=>{e.ref&&r.observe(e.ref)}),()=>{t.forEach(e=>{e.ref&&r.unobserve(e.ref)})}},[]),(0,r.jsxs)("div",{className:"flex flex-col md:flex-row min-h-screen dark",children:[(0,r.jsx)("div",{className:"fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 opacity-90 -z-10"}),(0,r.jsx)("aside",{className:"w-full md:w-80 bg-black/30 backdrop-blur-sm p-6 md:min-h-screen md:fixed border-r border-white/10",children:(0,r.jsxs)("div",{className:"flex flex-col items-center md:items-start gap-6",children:[(0,r.jsx)("div",{className:"relative w-32 h-32 rounded-full overflow-hidden border-2 border-primary/50",children:(0,r.jsx)(n.default,{src:"/placeholder.svg?height=128&width=128",alt:"Profile picture",fill:!0,className:"object-cover"})}),(0,r.jsxs)("div",{className:"text-center md:text-left",children:[(0,r.jsx)("h1",{className:"text-2xl font-bold text-white",children:"Tu Nombre"}),(0,r.jsx)("p",{className:"text-gray-400",children:"Desarrollador Web"})]}),(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)("h2",{className:"text-lg font-semibold mb-2 text-white",children:"Contacto"}),(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsxs)(j,{variant:"outline",className:"justify-start gap-2 w-full border-white/20 text-white hover:bg-white/10",children:[(0,r.jsx)(t.A,{size:18}),"email@ejemplo.com"]}),(0,r.jsxs)(j,{variant:"outline",className:"justify-start gap-2 w-full border-white/20 text-white hover:bg-white/10",children:[(0,r.jsx)(i.A,{size:18}),"linkedin.com/in/tunombre"]}),(0,r.jsxs)(j,{variant:"outline",className:"justify-start gap-2 w-full border-white/20 text-white hover:bg-white/10",children:[(0,r.jsx)(a.A,{size:18}),"github.com/tunombre"]})]})]}),(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)("h2",{className:"text-lg font-semibold mb-2 text-white",children:"Ubicaci\xf3n"}),(0,r.jsx)("p",{className:"text-gray-400",children:"Ciudad, Pa\xeds"})]})]})}),(0,r.jsxs)("main",{className:"flex-1 p-6 md:ml-80 text-white",children:[(0,r.jsxs)("div",{className:"sticky top-0 z-10 flex justify-center gap-2 py-4 mb-8 bg-black/50 backdrop-blur-sm rounded-lg",children:[(0,r.jsx)(j,{variant:"about"===c?"default":"ghost",onClick:()=>x(e,"about"),className:"transition-all",children:"Sobre m\xed"}),(0,r.jsx)(j,{variant:"experience"===c?"default":"ghost",onClick:()=>x(s,"experience"),className:"transition-all",children:"Experiencia"}),(0,r.jsx)(j,{variant:"projects"===c?"default":"ghost",onClick:()=>x(l,"projects"),className:"transition-all",children:"Proyectos"}),(0,r.jsx)(j,{variant:"skills"===c?"default":"ghost",onClick:()=>x(o,"skills"),className:"transition-all",children:"Conocimientos"})]}),(0,r.jsxs)("div",{className:"space-y-24",children:[(0,r.jsxs)("section",{id:"about",ref:e,className:"space-y-6 min-h-[80vh] flex flex-col justify-center",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold",children:"Sobre m\xed"}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsx)("p",{className:"text-lg",children:"\xa1Hola! Soy un desarrollador web apasionado por crear experiencias digitales atractivas y funcionales. Con experiencia en desarrollo frontend y backend, me especializo en construir aplicaciones web modernas utilizando las \xfaltimas tecnolog\xedas."}),(0,r.jsx)("p",{className:"text-lg",children:"Mi enfoque se centra en escribir c\xf3digo limpio, mantenible y escalable. Me encanta resolver problemas complejos y aprender continuamente nuevas tecnolog\xedas para mejorar mis habilidades."}),(0,r.jsx)("p",{className:"text-lg",children:"Cuando no estoy programando, disfruto de [tus hobbies e intereses]. Creo firmemente en el equilibrio entre la vida laboral y personal, lo que me permite mantener la creatividad y la productividad."})]})]}),(0,r.jsxs)("section",{id:"experience",ref:s,className:"space-y-6 min-h-[80vh] flex flex-col justify-center",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold",children:"Experiencia"}),(0,r.jsxs)("div",{className:"space-y-6",children:[(0,r.jsx)(f,{className:"bg-black/30 border-white/10",children:(0,r.jsxs)(g,{className:"p-6",children:[(0,r.jsxs)("div",{className:"flex justify-between items-start",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-xl font-semibold text-white",children:"Desarrollador Frontend"}),(0,r.jsx)("p",{className:"text-gray-400",children:"Empresa ABC"})]}),(0,r.jsx)("p",{className:"text-sm text-gray-400",children:"2021 - Presente"})]}),(0,r.jsxs)("ul",{className:"mt-4 space-y-2 list-disc pl-5 text-gray-300",children:[(0,r.jsx)("li",{children:"Desarrollo de interfaces de usuario con React y Next.js"}),(0,r.jsx)("li",{children:"Implementaci\xf3n de dise\xf1os responsivos utilizando Tailwind CSS"}),(0,r.jsx)("li",{children:"Colaboraci\xf3n con equipos de dise\xf1o y backend para crear soluciones completas"})]})]})}),(0,r.jsx)(f,{className:"bg-black/30 border-white/10",children:(0,r.jsxs)(g,{className:"p-6",children:[(0,r.jsxs)("div",{className:"flex justify-between items-start",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-xl font-semibold text-white",children:"Desarrollador Web Junior"}),(0,r.jsx)("p",{className:"text-gray-400",children:"Empresa XYZ"})]}),(0,r.jsx)("p",{className:"text-sm text-gray-400",children:"2019 - 2021"})]}),(0,r.jsxs)("ul",{className:"mt-4 space-y-2 list-disc pl-5 text-gray-300",children:[(0,r.jsx)("li",{children:"Desarrollo de sitios web utilizando HTML, CSS y JavaScript"}),(0,r.jsx)("li",{children:"Mantenimiento y actualizaci\xf3n de sitios web existentes"}),(0,r.jsx)("li",{children:"Optimizaci\xf3n de rendimiento y experiencia de usuario"})]})]})})]})]}),(0,r.jsxs)("section",{id:"projects",ref:l,className:"space-y-6 min-h-[80vh] flex flex-col justify-center",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold",children:"Proyectos"}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,r.jsx)(f,{className:"bg-black/30 border-white/10",children:(0,r.jsxs)(g,{className:"p-6",children:[(0,r.jsx)("h3",{className:"text-xl font-semibold text-white",children:"Proyecto 1"}),(0,r.jsx)("p",{className:"text-gray-400 mb-4",children:"React, Node.js, MongoDB"}),(0,r.jsx)("p",{className:"text-gray-300",children:"Una aplicaci\xf3n web completa que permite a los usuarios [descripci\xf3n del proyecto]. Implement\xe9 [caracter\xedsticas principales] y utilic\xe9 [tecnolog\xedas relevantes]."}),(0,r.jsxs)("div",{className:"flex gap-2 mt-4",children:[(0,r.jsx)(j,{variant:"default",size:"sm",children:"Demo"}),(0,r.jsx)(j,{variant:"outline",size:"sm",className:"border-white/20 text-white hover:bg-white/10",children:"C\xf3digo"})]})]})}),(0,r.jsx)(f,{className:"bg-black/30 border-white/10",children:(0,r.jsxs)(g,{className:"p-6",children:[(0,r.jsx)("h3",{className:"text-xl font-semibold text-white",children:"Proyecto 2"}),(0,r.jsx)("p",{className:"text-gray-400 mb-4",children:"Next.js, Tailwind CSS, Supabase"}),(0,r.jsx)("p",{className:"text-gray-300",children:"Una plataforma que permite [descripci\xf3n del proyecto]. Desarroll\xe9 [caracter\xedsticas principales] y aprend\xed [lecciones o tecnolog\xedas]."}),(0,r.jsxs)("div",{className:"flex gap-2 mt-4",children:[(0,r.jsx)(j,{variant:"default",size:"sm",children:"Demo"}),(0,r.jsx)(j,{variant:"outline",size:"sm",className:"border-white/20 text-white hover:bg-white/10",children:"C\xf3digo"})]})]})}),(0,r.jsx)(f,{className:"bg-black/30 border-white/10",children:(0,r.jsxs)(g,{className:"p-6",children:[(0,r.jsx)("h3",{className:"text-xl font-semibold text-white",children:"Proyecto 3"}),(0,r.jsx)("p",{className:"text-gray-400 mb-4",children:"React, Firebase, Styled Components"}),(0,r.jsx)("p",{className:"text-gray-300",children:"Una aplicaci\xf3n que [descripci\xf3n del proyecto]. Implement\xe9 [caracter\xedsticas principales] y super\xe9 [desaf\xedos interesantes]."}),(0,r.jsxs)("div",{className:"flex gap-2 mt-4",children:[(0,r.jsx)(j,{variant:"default",size:"sm",children:"Demo"}),(0,r.jsx)(j,{variant:"outline",size:"sm",className:"border-white/20 text-white hover:bg-white/10",children:"C\xf3digo"})]})]})})]})]}),(0,r.jsxs)("section",{id:"skills",ref:o,className:"space-y-8 min-h-[80vh] flex flex-col justify-center",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold",children:"Conocimientos"}),(0,r.jsxs)("div",{className:"space-y-8",children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("h3",{className:"text-xl font-semibold mb-4 text-white inline-flex items-center gap-2",children:[(0,r.jsx)("div",{className:"w-2 h-8 bg-blue-500 rounded mr-2"}),"Frontend"]}),(0,r.jsxs)("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",children:[(0,r.jsx)(f,{className:"bg-black/30 border-white/10 hover:border-blue-500/50 transition-all hover:shadow-md hover:shadow-blue-500/10",children:(0,r.jsxs)(g,{className:"p-4 flex flex-col items-center justify-center text-center",children:[(0,r.jsx)("div",{className:"w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-3 mt-3",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-blue-400",children:[(0,r.jsx)("path",{d:"M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),(0,r.jsx)("polyline",{points:"3 10 9 10"}),(0,r.jsx)("polyline",{points:"15 10 21 10"}),(0,r.jsx)("line",{x1:"12",x2:"12",y1:"10",y2:"22"}),(0,r.jsx)("path",{d:"M12 2v8"})]})}),(0,r.jsx)("h4",{className:"font-medium text-white",children:"HTML5"}),(0,r.jsx)("div",{className:"w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden",children:(0,r.jsx)("div",{className:"bg-blue-500 h-full rounded-full",style:{width:"90%"}})})]})}),(0,r.jsx)(f,{className:"bg-black/30 border-white/10 hover:border-blue-500/50 transition-all hover:shadow-md hover:shadow-blue-500/10",children:(0,r.jsxs)(g,{className:"p-4 flex flex-col items-center justify-center text-center",children:[(0,r.jsx)("div",{className:"w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-3 mt-3",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-blue-400",children:[(0,r.jsx)("path",{d:"M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),(0,r.jsx)("circle",{cx:"12",cy:"12",r:"7"}),(0,r.jsx)("polyline",{points:"8 12 12 16 16 12"}),(0,r.jsx)("line",{x1:"12",x2:"12",y1:"8",y2:"16"})]})}),(0,r.jsx)("h4",{className:"font-medium text-white",children:"CSS3"}),(0,r.jsx)("div",{className:"w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden",children:(0,r.jsx)("div",{className:"bg-blue-500 h-full rounded-full",style:{width:"85%"}})})]})}),(0,r.jsx)(f,{className:"bg-black/30 border-white/10 hover:border-yellow-500/50 transition-all hover:shadow-md hover:shadow-yellow-500/10",children:(0,r.jsxs)(g,{className:"p-4 flex flex-col items-center justify-center text-center",children:[(0,r.jsx)("div",{className:"w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mb-3 mt-3",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-yellow-400",children:[(0,r.jsx)("path",{d:"M12 2v16"}),(0,r.jsx)("path",{d:"m9 18 3 4 3-4"}),(0,r.jsx)("path",{d:"M5 8h14"}),(0,r.jsx)("path",{d:"M5 12h14"}),(0,r.jsx)("path",{d:"M5 16h14"})]})}),(0,r.jsx)("h4",{className:"font-medium text-white",children:"JavaScript"}),(0,r.jsx)("div",{className:"w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden",children:(0,r.jsx)("div",{className:"bg-yellow-500 h-full rounded-full",style:{width:"88%"}})})]})}),(0,r.jsx)(f,{className:"bg-black/30 border-white/10 hover:border-cyan-500/50 transition-all hover:shadow-md hover:shadow-cyan-500/10",children:(0,r.jsxs)(g,{className:"p-4 flex flex-col items-center justify-center text-center",children:[(0,r.jsx)("div",{className:"w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-3 mt-3",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-cyan-400",children:[(0,r.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,r.jsx)("path",{d:"M12 2a4.2 4.2 0 0 0 4 4 4.2 4.2 0 0 1 3 7 4.2 4.2 0 0 0-3 4 4.2 4.2 0 0 1-8 0 4.2 4.2 0 0 0-3-4 4.2 4.2 0 0 1 3-7 4.2 4.2 0 0 0 4-4"})]})}),(0,r.jsx)("h4",{className:"font-medium text-white",children:"React"}),(0,r.jsx)("div",{className:"w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden",children:(0,r.jsx)("div",{className:"bg-cyan-500 h-full rounded-full",style:{width:"85%"}})})]})}),(0,r.jsx)(f,{className:"bg-black/30 border-white/10 hover:border-black/50 transition-all hover:shadow-md hover:shadow-white/10",children:(0,r.jsxs)(g,{className:"p-4 flex flex-col items-center justify-center text-center",children:[(0,r.jsx)("div",{className:"w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-3 mt-3",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-white",children:[(0,r.jsx)("path",{d:"M12 2L2 7l10 5 10-5-10-5z"}),(0,r.jsx)("path",{d:"M2 17l10 5 10-5"}),(0,r.jsx)("path",{d:"M2 12l10 5 10-5"})]})}),(0,r.jsx)("h4",{className:"font-medium text-white",children:"Next.js"}),(0,r.jsx)("div",{className:"w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden",children:(0,r.jsx)("div",{className:"bg-white h-full rounded-full",style:{width:"80%"}})})]})}),(0,r.jsx)(f,{className:"bg-black/30 border-white/10 hover:border-sky-500/50 transition-all hover:shadow-md hover:shadow-sky-500/10",children:(0,r.jsxs)(g,{className:"p-4 flex flex-col items-center justify-center text-center",children:[(0,r.jsx)("div",{className:"w-12 h-12 rounded-full bg-sky-500/20 flex items-center justify-center mb-3 mt-3",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-sky-400",children:[(0,r.jsx)("path",{d:"M6 9v12"}),(0,r.jsx)("path",{d:"M18 9v12"}),(0,r.jsx)("path",{d:"M2 5h20"}),(0,r.jsx)("path",{d:"M3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4H3V5z"})]})}),(0,r.jsx)("h4",{className:"font-medium text-white",children:"Tailwind"}),(0,r.jsx)("div",{className:"w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden",children:(0,r.jsx)("div",{className:"bg-sky-500 h-full rounded-full",style:{width:"90%"}})})]})}),(0,r.jsx)(f,{className:"bg-black/30 border-white/10 hover:border-blue-500/50 transition-all hover:shadow-md hover:shadow-blue-500/10",children:(0,r.jsxs)(g,{className:"p-4 flex flex-col items-center justify-center text-center",children:[(0,r.jsx)("div",{className:"w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-3 mt-3",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-blue-400",children:[(0,r.jsx)("path",{d:"M16.5 9.4 7.5 4.21"}),(0,r.jsx)("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),(0,r.jsx)("polyline",{points:"3.29 7 12 12 20.71 7"}),(0,r.jsx)("line",{x1:"12",x2:"12",y1:"22",y2:"12"})]})}),(0,r.jsx)("h4",{className:"font-medium text-white",children:"TypeScript"}),(0,r.jsx)("div",{className:"w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden",children:(0,r.jsx)("div",{className:"bg-blue-500 h-full rounded-full",style:{width:"75%"}})})]})})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("h3",{className:"text-xl font-semibold mb-4 text-white inline-flex items-center gap-2",children:[(0,r.jsx)("div",{className:"w-2 h-8 bg-green-500 rounded mr-2"}),"Backend"]}),(0,r.jsxs)("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",children:[(0,r.jsx)(f,{className:"bg-black/30 border-white/10 hover:border-green-500/50 transition-all hover:shadow-md hover:shadow-green-500/10",children:(0,r.jsxs)(g,{className:"p-4 flex flex-col items-center justify-center text-center",children:[(0,r.jsx)("div",{className:"w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-3 mt-3",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-green-400",children:[(0,r.jsx)("path",{d:"M12 22v-7l-2-2"}),(0,r.jsx)("path",{d:"M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z"}),(0,r.jsx)("path",{d:"m16 8-3.4 1.9"}),(0,r.jsx)("path",{d:"m8 8 3.4 1.9"}),(0,r.jsx)("path",{d:"M12 4v4"})]})}),(0,r.jsx)("h4",{className:"font-medium text-white",children:"Node.js"}),(0,r.jsx)("div",{className:"w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden",children:(0,r.jsx)("div",{className:"bg-green-500 h-full rounded-full",style:{width:"85%"}})})]})}),(0,r.jsx)(f,{className:"bg-black/30 border-white/10 hover:border-green-500/50 transition-all hover:shadow-md hover:shadow-green-500/10",children:(0,r.jsxs)(g,{className:"p-4 flex flex-col items-center justify-center text-center",children:[(0,r.jsx)("div",{className:"w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-3 mt-3",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-green-400",children:(0,r.jsx)("path",{d:"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"})})}),(0,r.jsx)("h4",{className:"font-medium text-white",children:"Express.js"}),(0,r.jsx)("div",{className:"w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden",children:(0,r.jsx)("div",{className:"bg-green-500 h-full rounded-full",style:{width:"80%"}})})]})}),(0,r.jsx)(f,{className:"bg-black/30 border-white/10 hover:border-green-500/50 transition-all hover:shadow-md hover:shadow-green-500/10",children:(0,r.jsxs)(g,{className:"p-4 flex flex-col items-center justify-center text-center",children:[(0,r.jsx)("div",{className:"w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-3 mt-3",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-green-400",children:[(0,r.jsx)("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),(0,r.jsx)("path",{d:"M3 5v14a9 3 0 0 0 18 0V5"}),(0,r.jsx)("path",{d:"M3 12a9 3 0 0 0 18 0"})]})}),(0,r.jsx)("h4",{className:"font-medium text-white",children:"MongoDB"}),(0,r.jsx)("div",{className:"w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden",children:(0,r.jsx)("div",{className:"bg-green-500 h-full rounded-full",style:{width:"75%"}})})]})}),(0,r.jsx)(f,{className:"bg-black/30 border-white/10 hover:border-blue-500/50 transition-all hover:shadow-md hover:shadow-blue-500/10",children:(0,r.jsxs)(g,{className:"p-4 flex flex-col items-center justify-center text-center",children:[(0,r.jsx)("div",{className:"w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-3 mt-3",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-blue-400",children:[(0,r.jsx)("path",{d:"M3 11v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8"}),(0,r.jsx)("path",{d:"M12 3c-4.97 0-9 4.03-9 9"}),(0,r.jsx)("path",{d:"M21 12c0-4.97-4.03-9-9-9"}),(0,r.jsx)("path",{d:"M12 8v5"}),(0,r.jsx)("path",{d:"m15 8-3 5-3-5"})]})}),(0,r.jsx)("h4",{className:"font-medium text-white",children:"PostgreSQL"}),(0,r.jsx)("div",{className:"w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden",children:(0,r.jsx)("div",{className:"bg-blue-500 h-full rounded-full",style:{width:"70%"}})})]})}),(0,r.jsx)(f,{className:"bg-black/30 border-white/10 hover:border-purple-500/50 transition-all hover:shadow-md hover:shadow-purple-500/10",children:(0,r.jsxs)(g,{className:"p-4 flex flex-col items-center justify-center text-center",children:[(0,r.jsx)("div",{className:"w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-3 mt-3",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-purple-400",children:[(0,r.jsx)("path",{d:"M7 10v12"}),(0,r.jsx)("path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"})]})}),(0,r.jsx)("h4",{className:"font-medium text-white",children:"GraphQL"}),(0,r.jsx)("div",{className:"w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden",children:(0,r.jsx)("div",{className:"bg-purple-500 h-full rounded-full",style:{width:"65%"}})})]})})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("h3",{className:"text-xl font-semibold mb-4 text-white inline-flex items-center gap-2",children:[(0,r.jsx)("div",{className:"w-2 h-8 bg-orange-500 rounded mr-2"}),"Herramientas"]}),(0,r.jsxs)("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",children:[(0,r.jsx)(f,{className:"bg-black/30 border-white/10 hover:border-orange-500/50 transition-all hover:shadow-md hover:shadow-orange-500/10",children:(0,r.jsxs)(g,{className:"p-4 flex flex-col items-center justify-center text-center",children:[(0,r.jsx)("div",{className:"w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-3 mt-3",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-orange-400",children:[(0,r.jsx)("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),(0,r.jsx)("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})}),(0,r.jsx)("h4",{className:"font-medium text-white",children:"Git"}),(0,r.jsx)("div",{className:"w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden",children:(0,r.jsx)("div",{className:"bg-orange-500 h-full rounded-full",style:{width:"90%"}})})]})}),(0,r.jsx)(f,{className:"bg-black/30 border-white/10 hover:border-blue-500/50 transition-all hover:shadow-md hover:shadow-blue-500/10",children:(0,r.jsxs)(g,{className:"p-4 flex flex-col items-center justify-center text-center",children:[(0,r.jsx)("div",{className:"w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-3 mt-3",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-blue-400",children:[(0,r.jsx)("path",{d:"M16 3h5v5"}),(0,r.jsx)("path",{d:"M8 3H3v5"}),(0,r.jsx)("path",{d:"M3 16v5h5"}),(0,r.jsx)("path",{d:"M16 21h5v-5"}),(0,r.jsx)("rect",{width:"5",height:"5",x:"10",y:"10",rx:"0.5"})]})}),(0,r.jsx)("h4",{className:"font-medium text-white",children:"VS Code"}),(0,r.jsx)("div",{className:"w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden",children:(0,r.jsx)("div",{className:"bg-blue-500 h-full rounded-full",style:{width:"95%"}})})]})}),(0,r.jsx)(f,{className:"bg-black/30 border-white/10 hover:border-purple-500/50 transition-all hover:shadow-md hover:shadow-purple-500/10",children:(0,r.jsxs)(g,{className:"p-4 flex flex-col items-center justify-center text-center",children:[(0,r.jsx)("div",{className:"w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-3 mt-3",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-purple-400",children:[(0,r.jsx)("path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"}),(0,r.jsx)("path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"}),(0,r.jsx)("path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"}),(0,r.jsx)("path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"}),(0,r.jsx)("path",{d:"M12 16h3.5a3.5 3.5 0 1 1 0 7H12v-7z"})]})}),(0,r.jsx)("h4",{className:"font-medium text-white",children:"Figma"}),(0,r.jsx)("div",{className:"w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden",children:(0,r.jsx)("div",{className:"bg-purple-500 h-full rounded-full",style:{width:"80%"}})})]})}),(0,r.jsx)(f,{className:"bg-black/30 border-white/10 hover:border-gray-500/50 transition-all hover:shadow-md hover:shadow-gray-500/10",children:(0,r.jsxs)(g,{className:"p-4 flex flex-col items-center justify-center text-center",children:[(0,r.jsx)("div",{className:"w-12 h-12 rounded-full bg-gray-500/20 flex items-center justify-center mb-3 mt-3",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-gray-400",children:[(0,r.jsx)("path",{d:"M12 2L2 7l10 5 10-5-10-5z"}),(0,r.jsx)("path",{d:"M2 17l10 5 10-5"}),(0,r.jsx)("path",{d:"M2 12l10 5 10-5"})]})}),(0,r.jsx)("h4",{className:"font-medium text-white",children:"Vercel"}),(0,r.jsx)("div",{className:"w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden",children:(0,r.jsx)("div",{className:"bg-gray-400 h-full rounded-full",style:{width:"85%"}})})]})}),(0,r.jsx)(f,{className:"bg-black/30 border-white/10 hover:border-red-500/50 transition-all hover:shadow-md hover:shadow-red-500/10",children:(0,r.jsxs)(g,{className:"p-4 flex flex-col items-center justify-center text-center",children:[(0,r.jsx)("div",{className:"w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mb-3 mt-3",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-red-400",children:[(0,r.jsx)("path",{d:"M2 12h10"}),(0,r.jsx)("path",{d:"M9 4v16"}),(0,r.jsx)("path",{d:"M14.5 4h-2.77a4.5 4.5 0 0 0 0 9h5.77c2.48 0 4.5 2.02 4.5 4.5v0c0 2.48-2.02 4.5-4.5 4.5H7"})]})}),(0,r.jsx)("h4",{className:"font-medium text-white",children:"Jest"}),(0,r.jsx)("div",{className:"w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden",children:(0,r.jsx)("div",{className:"bg-red-500 h-full rounded-full",style:{width:"70%"}})})]})})]})]})]})]})]})]})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[546,441,684,358],()=>s(4154)),_N_E=e.O()}]);