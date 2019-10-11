/**
 * Writing data for hacking stem experiments
 */
//% weight=94 color=#EC7505 icon="\uf1b3"
namespace hourOfCode {
    let targetsL4 = 5
    let targetsL5 = 8
    let targetsL6 = 12
    let hazardA = 31    // fern for HoC (variants: tallgrass)
    let hazardB = 175   // double tallgrass for HoC (variants: peony, rose bush, large fern, lilac, sunflower)
    let completionBlockA = Block.DiamondBlock
    let completionBlockB = Block.GoldBlock
    let completionPosition = [positions.createWorld(-75, 65, -122), positions.createWorld(-57, 57, -63), positions.createWorld(-4, 32, 199)]

    //% block="agent detect dry fern %dir"
    //% weight=80
    export function agentDetectDryFern(dir: SixDirection) {
        return agent.inspect(AgentInspection.Block, dir) == hazardA
    }

    //% block="agent detect dry grass %dir"
    //% weight=80
    export function agentDetectDryGrass(dir: SixDirection) {
        return agent.inspect(AgentInspection.Block, dir) == hazardB
    }

    //% block="agent analyze %dir"
    //% weight=70
    export function agentAnalyze(dir: SixDirection) {
        let targetBlock = agent.inspect(AgentInspection.Block, dir)
        if (targetBlock == hazardA || targetBlock == hazardB) {
            mobs.execute(
                mobs.target(TargetSelectorKind.NearestPlayer),
                positions.create(0, 0, 0),
                "playsound random.levelup @p"
            )
            if (targetBlock == hazardA) {
                blocks.place(completionBlockA, completionPosition[0])
            } else {
                blocks.place(completionBlockB, completionPosition[0])
            }
            
        }
    }

    //% block="hazards remain"
    //% weight=45
    export function hazardsRemainL4() {
        if (targetsL4 == 0) {
            blocks.place(completionBlockA, completionPosition[1])
        }
        return targetsL4 > 0
    }
    //% block="agent destroy %dir"
    //% weight=40
    export function agentDestroyL4(dir: SixDirection) {
        let targetBlock4 = agent.inspect(AgentInspection.Block, dir)
        if (targetBlock4 == hazardA || targetBlock4 == hazardB) {
            targetsL4 -= 1
        }
        agent.destroy(dir)
    }

    //% block="hazards remain"
    //% weight=55
    export function hazardsRemainL5() {
        if (targetsL5 == 0) {
            blocks.place(completionBlockA, completionPosition[2])
        }
        return targetsL5 > 0
    }
    //% block="agent destroy %dir"
    //% weight=50
    export function agentDestroyL5(dir: SixDirection) {
        let targetBlock5 = agent.inspect(AgentInspection.Block, dir)
        if (targetBlock5 == hazardA || targetBlock5 == hazardB) {
            targetsL5 -= 1
        }
        agent.destroy(dir)
    }

    //% block="hazards remain"
    //% weight=65
    export function hazardsRemainL6() {
        if (targetsL6 == 0) {
            blocks.place(completionBlockB, completionPosition[2])
        }
        return targetsL6 > 0
    }
    //% block="agent destroy %dir"
    //% weight=60
    export function agentDestroyL6(dir: SixDirection) {
        let targetBlock6 = agent.inspect(AgentInspection.Block, dir)
        if (targetBlock6 == hazardA || targetBlock6 == hazardB) {
            targetsL6 -= 1
        }
        agent.destroy(dir)
    }
}
