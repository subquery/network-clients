# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.5.1] - 2023-06-15
### Changed
- Improve retry logic & logs (#129)

### Added
- More unit tests for retry logic and fallover

## [0.5.0] - 2023-06-14
### Fixed
- fix the apollo/client import to /core to avoid react dep (#125)

### Changed
- separate the link create function for dict & project (#124)
- rename projectHttpLink to deploymentHttpLink (#126)

## [0.4.0] - 2023-06-13
### Added
- Feat/auth link routing (#122)

## [0.3.4] - 2023-06-13
### Added
- Get networkChainId from authURl (#108)

### Fixed
- Fix runtime error catch for authLink (#120)

## [0.2.1] - 2023-06-13
### Added
- Add Authlink for Apollo client

[Unreleased]: https://github.com/subquery/network-clients/compare/v0.5.1...HEAD
[0.5.1]: https://github.com/subquery/network-clients/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/subquery/network-clients/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/subquery/network-clients/compare/v0.3.4...v0.4.0
[0.3.4]: https://github.com/subquery/network-clients/compare/v0.2.1...v0.3.4
[0.2.1]: https://github.com/subquery/network-clients/releases/tag/v0.2.1
