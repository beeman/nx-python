import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect'
import { from, Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { BuildBuilderSchema } from './schema'
import { runPythonCommand } from '../../utils/py-utils'

export function runBuilder(options: BuildBuilderSchema, context: BuilderContext): Observable<BuilderOutput> {
  return from(context.getProjectMetadata(context?.target?.project)).pipe(
    map((project) => {
      const root = project.root
      const sources = `${root}/**/*.py`

      return runPythonCommand(context, '-m unittest discover -s ./ -p', [sources])
    }),
  )
}

export default createBuilder(runBuilder)