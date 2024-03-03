import webpack, {DefinePlugin} from 'webpack'
import {  RuleSetRule } from 'webpack'
import { type BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }
    config!.resolve!.modules!.push(paths.src)
    config!.resolve!.extensions!.push('.ts', 'tsx')
    //@ts-ignore
    config!.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i }
        }

        return rule;
    })

    config!.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
    })

    config!.module!.rules.push(buildCssLoader(true))

    config!.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('')
    }))

    return config
}
