/**
 * Writing data for hacking stem experiments
 */
//% weight=94 color=#EC7505 icon="\uf1b3"
namespace hourOfCode {
    let targetsL4 = 5
    let targetsL5 = 8
    let targetsL6 = 12

    //% block="agent detect dead bush %dir"
    //% weight=80
    export function agentDetectDeadBush(dir: SixDirection) {
        return agent.inspect(AgentInspection.Block, dir) == Block.DeadBush
    }

    //% block="agent detect dry grass %dir"
    //% weight=80
    export function agentDetectDryGrass(dir: SixDirection) {
        return agent.inspect(AgentInspection.Block, dir) == Block.Sunflower
    }

    //% block="agent analyze %dir"
    //% weight=70
    export function agentAnalyze(dir: SixDirection) {
        if (hourOfCode.agentDetectDeadBush(dir) || hourOfCode.agentDetectDryGrass(dir)) {
            mobs.execute(
                mobs.target(TargetSelectorKind.NearestPlayer),
                positions.create(0, 0, 0),
                "playsound random.levelup @p"
            )
        }
    }

    //% block="hazards remain"
    //% weight=45
    export function hazardsRemainL4() {
        return targetsL4 > 0
    }
    //% block="agent destroy %dir"
    //% weight=40
    export function agentDestroyL4(dir: SixDirection) {
        if (hourOfCode.agentDetectDeadBush(dir) || hourOfCode.agentDetectDryGrass(dir)) {
            targetsL4 -= 1
        }
        agent.destroy(dir)
    }

    //% block="hazards remain"
    //% weight=55
    export function hazardsRemainL5() {
        return targetsL5 > 0
    }
    //% block="agent destroy %dir"
    //% weight=50
    export function agentDestroyL5(dir: SixDirection) {
        if (hourOfCode.agentDetectDeadBush(dir) || hourOfCode.agentDetectDryGrass(dir)) {
            targetsL5 -= 1
        }
        agent.destroy(dir)
    }

    //% block="hazards remain"
    //% weight=65
    export function hazardsRemainL6() {
        return targetsL6 > 0
    }
    //% block="agent destroy %dir"
    //% weight=60
    export function agentDestroyL6(dir: SixDirection) {
        if (hourOfCode.agentDetectDeadBush(dir) || hourOfCode.agentDetectDryGrass(dir)) {
            targetsL6 -= 1
        }
        agent.destroy(dir)
    }
}
