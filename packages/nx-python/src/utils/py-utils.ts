import { BuilderContext } from '@angular-devkit/architect'
import { execSync } from 'child_process'

export function runPythonCommand(
  context: BuilderContext,
  command: '-m py_compile' | '-m flake8' | '' | '-m unittest discover -s ./ -p',
  params: string[],
  options: { cwd?: string; cmd?: string } = {},
): { success: boolean } {
  // Take the parameters or set defaults
  const cmd = options.cmd || 'python'
  const cwd = options.cwd || process.cwd()

  // Create the command to execute
  const execute = `${cmd} ${command} ${params.join(' ')}`

  try {
    context.logger.info(`Executing command: ${execute}`)
    execSync(execute, { cwd, stdio: [0, 1, 2] })
    return { success: true }
  } catch (e) {
    context.logger.error(`Failed to execute command: ${execute}`, e)
    return { success: false }
  }
}