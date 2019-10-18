/**
 * Writing data for hacking stem experiments
 */
//% weight=94 color=#EC7505 icon="\uf1b3"
namespace hourOfCode {
    // the agentDestroy and hazardsRemain functions are supposed to
    // look indistinguishable from lesson to lesson, since only one
    // set will ever appear at a time. their display names should
    // not specifically include which lesson they are a part of
    let targetsL4 = 5
    let targetsL5 = 10
    let targetsL6 = 60
    let shortHazard = 31   // fern and tallgrass
    let tallHazard = 175   // double plant (variants: peony, rose bush, double tallgrass, large fern, lilac, sunflower)
    let airBlock = Block.Air
    let brokeNonHazard = false
    let taskIsComplete = false

    // hidden from user, used by other functions
    //% block
    function completeTask() {
        if (!taskIsComplete) {
            mobs.execute(
                mobs.target(TargetSelectorKind.NearestPlayer),
                positions.create(0, 0, 0),
                "scoreboard players add @s task 1"
            )
            taskIsComplete = true
        }
    }
    
    /**
     * Open a door
     */
    //% block="open door"
    //% weight=90
    export function openDoor() {
        completeTask()
    }
    
    /**
     * Detect the hazard of a dry fern
     * @param dir the direction to detect the dry fern
     */
    //% block="agent detect dry fern %dir"
    //% weight=80
    export function agentDetectDryFern(dir: SixDirection) {
        return agent.inspect(AgentInspection.Block, dir) == shortHazard
    }

    /**
     * Detect the hazard of dry grass
     * @param dir the direction to detect the dry grass
     */
    //% block="agent detect dry grass %dir"
    //% weight=80
    export function agentDetectDryGrass(dir: SixDirection) {
        return agent.inspect(AgentInspection.Block, dir) == tallHazard
    }

    /**
     * Check for any hazards in a direction
     * @param dir the direction to check for hazards
     */
    //% block="agent analyze %dir"
    //% weight=70
    export function agentAnalyze(dir: SixDirection) {
        let targetBlock = agent.inspect(AgentInspection.Block, dir)
        if (targetBlock == shortHazard || targetBlock == tallHazard) {
            mobs.execute(
                mobs.target(TargetSelectorKind.NearestPlayer),
                positions.create(0, 0, 0),
                "playsound random.levelup @p"
            )
            completeTask()
        }
    }

    /**
     * Check for any remaining hazards on level 4
     */
    //% block="hazards remain"
    //% weight=45
    export function hazardsRemainL4() {
        if (targetsL4 == 0 && !brokeNonHazard) {
            completeTask()
        }
        return targetsL4 > 0
    }

    /**
     * Destroy block at level 4
     * @param dir the direction to destroy a block at
     */
    //% block="agent destroy %dir"
    //% weight=40
    export function agentDestroyL4(dir: SixDirection) {
        let targetBlock4 = agent.inspect(AgentInspection.Block, dir)
        if (targetBlock4 == shortHazard || targetBlock4 == tallHazard) {
            targetsL4 -= 1
        } else if (targetBlock4 != airBlock) {
            brokeNonHazard = true
        }
        agent.destroy(dir)
    }

    /**
     * Check for any remaining hazards on level 5
     */
    //% block="hazards remain"
    //% weight=55
    export function hazardsRemainL5() {
        if (targetsL5 == 0 && !brokeNonHazard) {
            completeTask()
        }
        return targetsL5 > 0
    }
    
    /**
     * Destroy block at level 5
     * @param dir the direction to destroy a block at
     */
    //% block="agent destroy %dir"
    //% weight=50
    export function agentDestroyL5(dir: SixDirection) {
        let targetBlock5 = agent.inspect(AgentInspection.Block, dir)
        if (targetBlock5 == shortHazard || targetBlock5 == tallHazard) {
            targetsL5 -= 1
        } else if (targetBlock5 != airBlock) {
            brokeNonHazard = true
        }
        agent.destroy(dir)
    }

    /**
     * Check for any remaining hazards on level 6
     */
    //% block="hazards remain"
    //% weight=65
    export function hazardsRemainL6() {
        if (targetsL6 == 0 && !brokeNonHazard) {
            completeTask()
        }
        return targetsL6 > 0
    }

    /**
     * Destroy block at level 6
     * @param dir the direction to destroy a block at
     */
    //% block="agent destroy %dir"
    //% weight=60
    export function agentDestroyL6(dir: SixDirection) {
        let targetBlock6 = agent.inspect(AgentInspection.Block, dir)
        if (targetBlock6 == shortHazard || targetBlock6 == tallHazard) {
            targetsL6 -= 1
        } else if (targetBlock6 != airBlock) {
            brokeNonHazard = true
        }
        agent.destroy(dir)
    }
}
