
const UsuariosMap = [
    {
      nome: 'Caio Mesquita',
      profissão: 'Prod. Cursos Online',
      img: 'https://randomuser.me/api/portraits/men/22.jpg',
    },
    {
      nome: 'Larissa Souza',
      profissão: 'Especialista em Tráfego Pago',
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      nome: 'João Pedro Farias',
      profissão: 'CEO - Agência',
      img: 'https://randomuser.me/api/portraits/men/36.jpg',
    },
    {
      nome: 'Ana Clara Lima',
      profissão: 'Social Media',
      img: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    {
      nome: 'Gabriel Torres',
      profissão: 'Desenvolvedor Fullstack',
      img: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    {
      nome: 'Marina Ferreira',
      profissão: 'UX/UI Designer',
      img: 'https://randomuser.me/api/portraits/women/12.jpg',
    },
    {
      nome: 'Lucas Andrade',
      profissão: 'Programador Backend',
      img: 'https://randomuser.me/api/portraits/men/22.jpg',
    },
    {
      nome: 'Beatriz Rocha',
      profissão: 'Consultora de Lançamentos',
      img: 'https://randomuser.me/api/portraits/women/15.jpg',
    },
    {
      nome: 'Vinícius Carvalho',
      profissão: 'Founder',
      img: 'https://randomuser.me/api/portraits/men/28.jpg',
    },
    {
      nome: 'Juliana Martins',
      profissão: 'Copywriter',
      img: 'https://randomuser.me/api/portraits/women/19.jpg',
    },
];
  

export function CarroselUsuários () {
    return (
        <div className="absolute bottom-0 w-full overflow-hidden">
            {/* Gradientes nas laterais */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

            {/* Carrossel animado */}
            <div className="flex animate-carousel whitespace-nowrap gap-x-[25px] mb-5">
                {UsuariosMap.map((user) => (
                <div className="flex gap-x-[10px]">
                    <div key={user.nome} className="flex rounded-full border bg-white/5 border-white/30  items-center py-2 px-3 shrink-0">
                        <div className="rounded-full bg-white size-8 flex items-center justify-center mr-1.5">
                            <img src={user.img} alt={user.img} className="rounded-full object-cover" />
                        </div>
                        <div className="flex flex-col gap- text-white mr-1">
                            <span className="text-xs font-medium">{user.nome}</span>
                            <p className="text-xs">{user.profissão}</p>
                        </div>
                    </div>
                </div>
                ))}
                {UsuariosMap.map((user) => (
                <div className="flex gap-x-[10px]">
                    <div key={user.nome} className="flex rounded-full border bg-white/5 border-white/30  items-center py-2 px-3 shrink-0">
                        <div className="rounded-full bg-white size-8 border border-white/30 flex items-center justify-center mr-1.5">
                            <img src={user.img} alt={user.img} className="rounded-full object-cover" />
                        </div>
                        <div className="flex flex-col gap- text-white mr-1">
                            <span className="text-xs font-medium">{user.nome}</span>
                            <p className="text-xs">{user.profissão}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <div className="flex items-center justify-center">
                <span className="text-white font-medium tracking-tight text-lg">Centenas de usuários escolhem Valora todos os dias!</span>
            </div>
        </div>
    )
}