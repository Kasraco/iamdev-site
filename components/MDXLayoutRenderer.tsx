import dynamic from "next/dynamic"
import CustomLink from "./Link"
import { useMemo } from "react"
import Image from "./Image"

export const MDXComponents = {
    Image,
    a: CustomLink,
    wrapper: ({ components, layout, ...rest }: any) => {
        if (!layout) {
            return <>{rest.children}</>
        }
        try {
            const Layout = require(`../layouts/${layout}`).default
            return <Layout {...rest} />
        } catch (error) {
            console.error(`Layout ${layout} not found, using default wrapper`)
            return <>{rest.children}</>
        }
    },
}

const MDXLayoutRenderer = (props: any) => {
    const { layout, mdxSource, path, ...rest } = props
    const MDXLayout = useMemo(() => {
        if (!path) {
            console.error('MDXLayoutRenderer: path is required but was not provided')
            const ErrorComponent = () => <div>Error: MDX content path is missing</div>
            ErrorComponent.displayName = 'MDXError'
            return ErrorComponent
        }
        return dynamic(() => import(`../data/blog/${path}`))
    }, [path])
    return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
export default MDXLayoutRenderer