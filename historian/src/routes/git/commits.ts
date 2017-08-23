import { Router } from "express";
import * as nconf from "nconf";
import * as services from "../../services";
import * as utils from "../utils";

export function create(store: nconf.Provider, gitService: services.IGitService): Router {
    const router: Router = Router();

    router.post("/repos/:repo/git/commits", (request, response, next) => {
        const commitP = gitService.createCommit(request.params.repo, request.body);
        utils.handleResponse(
            commitP,
            response,
            false,
            201);
    });

    router.get("/repos/:repo/git/commits/:sha", (request, response, next) => {
        const commitP = gitService.getCommit(request.params.repo, request.params.sha);
        utils.handleResponse(commitP, response);
    });

    return router;
}
