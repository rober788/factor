import * as cli from "@factor/cli"

describe("cli", () => {
  describe("setup cli", () => {
    it("setup: run yarn install to verify node_modules installed", async () => {
      let consoleOutput = []

      const originalStd = process.stdout.write

      const mockedLog = output => consoleOutput.push(output)

      // @ts-ignore
      process.stdout.write = mockedLog
      // @ts-ignore
      jest.spyOn(process, "exit").mockImplementation(() => {})

      await cli.runCommand()

      // eslint-disable-next-line require-atomic-updates
      process.stdout.write = originalStd

      const allOutput = consoleOutput.join("")
      expect(allOutput).toContain("Verify Dependencies")
      expect(allOutput).toContain("Verify Extensions")
    })

    it("cli setup: sets environmental variables", () => {
      expect(Object.keys(process.env)).toEqual(
        expect.arrayContaining([
          "FACTOR_ENV",
          "NODE_ENV",
          "FACTOR_CWD",
          "FACTOR_COMMAND",
          "FACTOR_DEBUG",
          "PORT"
        ])
      )
    })
    it.todo("setup: support aliases '~' & '@'")
  })

  describe("commands", () => {
    it.todo("Runs development server with 'factor dev'")
    it.todo("Builds and then runs production server with 'factor start'")
    it.todo("Builds 'factor build'")
    it.todo("Runs setup utility with 'factor setup'")
    it.todo("Builds extension loaders with 'factor create-loaders'")
  })

  describe("logging", () => {
    it.todo("logs dev information")
    it.todo("logs port")
  })
})
