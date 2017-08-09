import * as socketStorage from ".";
import * as api from "../api";

export function getDefaultService(deltaUrl: string, blobUrl: string, repository: string): api.IDocumentService {
    const blobStorage = new socketStorage.BlobStorageService(blobUrl, repository);
    const deltaStorage = new socketStorage.DeltaStorageService(deltaUrl);
    const service = new socketStorage.DocumentService(deltaUrl, deltaStorage, blobStorage);

    return service;
}

export function registerAsDefault(deltaUrl: string, blobUrl: string, repository: string) {
    const service = getDefaultService(deltaUrl, blobUrl, repository);
    api.registerDocumentService(service);
}
