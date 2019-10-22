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
    let maxL4 = 12
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
                "scoreboard players set @s success 1"
            )
            taskIsComplete = true
        }
    }
    
    /**
     * Opens a gate
     */
    //% block="open gate"
    //% weight=90
    export function openDoor() {
        completeTask()
    }
    
    /**
     * Detects if there is a dry fern next to the agent in the specified direction
     * @param dir the direction to detect the dry fern
     */
    //% block="agent detect dry fern %dir"
    //% weight=80
    export function agentDetectDryFern(dir: SixDirection) {
        return agent.inspect(AgentInspection.Block, dir) == shortHazard
    }

    /**
     * Detects if there is dry grass next to the agent in the specified direction
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
     * Checks that there are fire hazards
     */
    //% block="hazards remain"
    //% weight=45
    export function hazardsRemainL4() {
        loops.pause(1)
        maxL4 -= 1
        if (targetsL4 == 0 && !brokeNonHazard) {
            completeTask()
        }
        return targetsL4 > 0 && maxL4 >= 0
    }

    /**
     * Commands the agent to destroy a block in the given direction
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
     * Checks that there are fire hazards
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
     * Commands the agent to destroy a block in the given direction
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
     * Checks that there are fire hazards
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
     * Commands the agent to destroy a block in the given direction
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
