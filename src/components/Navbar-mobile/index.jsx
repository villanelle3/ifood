import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Disclosure, } from '@headlessui/react'
import { TextNav } from '../Navbar-site/styles'

const NavMobilie = function(props){
    const navigation = [
        { name: 'Restaurantes', href: '/', },
    ]
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return(
        <Disclosure as="nav" className="NavBarMobile">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bgdark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex flex-shrink-0 items-center">
                                        <TextNav>{props.n} produto(s) no carrinho</TextNav>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pt-2 pb-3">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-red-900 text-white' : 'bgdark hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                    >
                                    {item.name}
                                </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
        </Disclosure>
    )
}

export default NavMobilie